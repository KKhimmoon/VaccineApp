import Link from "next/link";
export default function TopMenuItem({title,pageRef}: {title:string,pageRef:string}) {
    return(
        <Link className = "w-32 text-center mt-auto mb-auto text-lg font-semibold text-gray-600 font-mono"  href = {pageRef}>
            {title}
        </Link>
    )
}