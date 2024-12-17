import Form from "next/form";

export default function Subscribe() {
    return (
        <div className="subscribe_newsletter">
            <Form action="/">
                <div className="form-group">
                    <label htmlFor="subscribe" className="light_label">Subscribe to our newsletter</label>
                    <div className="flex gap-x-4">
                        <input type="text" id="subscribe" className="min-w-[308px] form-control" placeholder="Your Email" />
                        <button type="submit" className="fill_btn">Subscribe</button>
                    </div>
                </div>
            </Form>
        </div>
    );
}