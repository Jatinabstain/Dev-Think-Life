"use client";

import React, { useState } from 'react';
import Form from "next/form";
import { MainModal } from '../components/MainModal/MainModal';

export default function Subscribe() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="subscribe_newsletter">
            <Form action="/">
                <div className="form-group">
                    <label htmlFor="subscribe" className="light_label">Subscribe to our newsletter</label>
                    <div className="flex flex-wrap gap-x-4 gap-y-4">
                        <input type="text" id="subscribe" className="min-w-[308px] form-control" placeholder="Your Email" />
                        <button type="submit" onClick={openModal} className="fill_btn">Subscribe</button>
                    </div>
                </div>
            </Form>
            <MainModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}