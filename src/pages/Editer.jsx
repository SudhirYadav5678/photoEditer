import React, { useEffect, useState } from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { TfiText } from "react-icons/tfi";
import { LuUpload } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { MdOutlineColorLens } from "react-icons/md";
import { FaRegFolderClosed } from "react-icons/fa6";
import Design from '../components/Design';
import CreateCompo from '../components/CreateCompo';
import { useSelector } from 'react-redux';


function Editer() {
    const { design } = useSelector(store => store.design)
    const [state, setState] = useState("")
    const [show, setShow] = useState({
        status: false,
        name: ""
    })
    const setElement = (type, name) => {
        setState(type)
        setShow({
            name: name,
            status: true
        })
    }
    const [image, setImage] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')
    const [component, setComponent] = useState([{
        id: Date.now(),
        name: "main_frame",
        type: "react",
        weidth: 800,
        height: 500,
        z_indes: 0,
        image: '',
        color: "#fff",
        setCurrentComponent: (a) => setCurrentComponent(a)
    }])

    const add_image = (img) => {
        setCurrentComponent('')
        const id = Date.now()
        const style = {
            id: id,
            name: 'image',
            type: 'image',
            left: 10,
            top: 10,
            opacity: 1,
            width: 800,
            height: 500,
            z_index: 2,
            ratius: 0,
            image: img,
            setCurrentComponent: (a) => setCurrentComponent(a),
        }
        setCurrentComponent(style)
        setComponent([...component, style])

    }

    useEffect(() => {
        try {
            for (let i = 0; i < design.length; i++) {
                design[i].setCurrentComponent = (a) => setCurrentComponent(a)
            }
            setComponent([{ ...component, image: design.path }])
        } catch (error) {
            console.log(error)
        }
    }, [design])

    return (
        <>
            <div className=''>
                <div className='w-full h-20 border-2 p-2 bg-gradient-to-r from-blue-100 via-sky-100 to-purple-100 '>
                    hello
                </div>
                <div className=' flex'>
                    <div className='w-[80px]'>
                        <div onClick={() => setElement("design", "design")} className='w-[70px] m-3 mt-5'>
                            <MdOutlineDashboard className='text-4xl hover:bg-gray-300 m-2 p-1' />
                            <span className='mr-5'>Design</span>
                        </div>
                        <div onClick={() => setElement("text", "text")} className='w-[70px] m-3 mt-5'>
                            <TfiText className='text-4xl  hover:bg-gray-300 m-2 p-1' />
                            <span className='ml-2'>Text</span>
                        </div>
                        <div onClick={() => setElement("upload", "upload")} className='w-[70px] m-3 mt-5'>
                            <LuUpload className='text-4xl  hover:bg-gray-300 m-2 p-1' />
                            <span className='mr-5'>Upload</span>
                        </div>
                        <div onClick={() => setElement("project", "project")} className='w-[70px] m-3 mt-5'>
                            <FaRegFolderClosed className='text-4xl hover:bg-gray-300 m-2 p-1' />
                            <span className='mr-5'>Projects</span>
                        </div>
                    </div>

                    {
                        show.status && <div className='flex'>
                            <div className='w-[400px] border-2 rounded-2xl hover:shadow-md ml-2 mt-3 h-[600px] overflow-scroll'>
                                {
                                    state === "design" && <div className=''><div className='bg-blue-400 text-center text-3xl h-[50px] mb-5'>Design</div><Design /></div>
                                }
                                {
                                    state === "text" && <div><div className='bg-orange-400 text-center text-3xl h-[50px]'>Text</div><div className='bg-purple-400 border-2 w-fit p-4 mx-auto mt-7 rounded-lg'>Add test</div></div>
                                }
                                {
                                    state === "upload" && <div><div className='bg-sky-400 text-center text-3xl h-[50px]'>Upload</div><div className='bg-purple-400 border-2 w-fit p-4 mx-auto mt-7 rounded-lg'><input className='' type="file" />Upload Images</div></div>
                                }
                                {
                                    state === "project" && <div className='bg-green-400 text-center text-3xl h-[50px]'>Projects</div>
                                }

                            </div>
                            <div onClick={() => setShow({ status: false })}>
                                <abbr title="close"><RiCloseLargeFill className='text-4xl bg-white hover:bg-gray-300 rounded-full p-2 mt-3 ml-2' /></abbr>
                            </div>
                        </div>
                    }

                    <div className={`w-full ${currentComponent ? `` : `mt-20`}`} >
                        {
                            currentComponent && <div className=' h-auto w-fit px-4 mx-auto flex shadow-xl border rounded-lg mt-5 mb-5'>
                                <div className='hover:bg-gray-200 border-2 rounded-md mx-1 my-1'><abbr title="Delete"><RiDeleteBinLine className='text-2xl m-2' /></abbr></div>
                                <div className='hover:bg-gray-200 border-2 rounded-md mx-1 my-1'><abbr title="Duplicate"><HiOutlineDocumentDuplicate className='text-2xl m-2' /></abbr></div>
                                <div className='hover:bg-gray-200 border-2 rounded-md mx-1 my-1'><abbr title="Color"><MdOutlineColorLens className='text-2xl m-2' /></abbr></div>
                            </div>
                        }

                        <div className='realtive border-2 h-[500px] w-[800px] mx-auto overflow-hidden'>
                            {component.map((c, i) => (<CreateCompo key={i} info={c} currentComponents={currentComponent} />))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Editer