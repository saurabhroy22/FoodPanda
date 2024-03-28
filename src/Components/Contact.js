function Contact(){
    return (<div className=" text-center mt-10">
        <h1 className=" font-bold">Please fill this form to contact us.</h1>
        <form className=" mt-4">
            <input type=" text" placeholder=" Name" className=" border border-black p-2 m-2 rounded-md"/>
            <input  type=" text" placeholder="Email Id" className=" border border-black p-2 m-2 rounded-md"/>
            <button className=" m-2 p-2 bg-pink-400 rounded-md hover:bg-pink-600"> Submit</button>
        </form>
    </div>)
};

export default Contact;