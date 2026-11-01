
function Loading() {
    return (
        <div className="
            min-h-[60vh]
            min-h-screen w-full pt-32
            flex
            items-center
            justify-center
        ">
            <div className="
                h-12
                w-12
                rounded-full
                border-4
                border-(--primary)
                border-t-transparent
                animate-spin
            "/>
        </div>
    )
}

export default Loading