export default function Authenticated({children}) {
    return (
        <>
            <div className="max-w-screen mx-auto hidden lg:block">
                {/* <!-- START: Sidebar --> */}
                {/* <!-- END: Sidebar --> */}

                {/* <!-- START: Content --> */}
                <div className="ml-[300px] px-[50px]">
                    <div className="flex flex-col gap-[50px] py-10">
                        {/* <!-- Topbar --> */}
                        {/* <!-- /Topbar --> */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>
        <div class="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
        <div class="text-white text-2xl text-center leading-snug font-medium my-auto">
            Sorry, this page only supported on 1024px screen or above
        </div>
    </div>
        </>
    )
}
