import { BiHome } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbBoxMultiple } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
export const CVMenuitems = [
    {
        text: "AllBooks",
        icon: (
            <BiHome
                size="1.6em"
            />
        ),
        link: "/AllBooks",
        index: "1",
    },
    {
        text: "IssueReqHistory",
        icon: (
            <AiOutlineSchedule
                size="1.6em"
            />
        ),
        link: "/IssueReqHistory",
        index: "2",
    },
    {
        text: "IssuedBooks",
        icon: (
            <TbBoxMultiple
                size="1.6em"
            />
        ),
        link: "/IssuedBooks",
        index: "3",
    },
    {
        text: "OverDue",
        icon: (
            <TbBoxMultiple
                size="1.6em"

            />
        ),
        link: "/OverDue",
        index: "4",
    }
]

export const AVMenuItems = [
    {
        text: "AddBooks",
        icon: (
            <VscFeedback
                size="1.6em"

            />
        ),
        link: "/AddBooks",
        index: "1",
    },
    {
        text: "AddCategory",
        icon: (
            <VscFeedback
                size="1.6em"

            />
        ),
        link: "/AddCategory",
        index: "2",
    },
    {
        text: "ManageCustomers",
        icon: (
            <AiOutlineSchedule
                size="1.6em"

            />
        ),
        link: "/ManageCustomers",
        index: "3",
    },
    {
        text: "ManageAdmins",
        icon: (
            <AiOutlineSchedule
                size="1.6em"

            />
        ),
        link: "/ManageAdmins",
        index: "4",
    },
    {
        text: "IssueRequests",
        icon: (
            <TbBoxMultiple
                size="1.6em"

            />
        ),
        link: "/IssueRequests",
        index: "5",
    },
    {
        text: "OverDue",
        icon: (
            <TbBoxMultiple
                size="1.6em"

            />
        ),
        link: "/OverDues",
        index: "6",
    }
    
]
export const allusers = [
    { username: 'Priya', phoneNumber: '6303640577', emailId: 'priya@gmail.com', sex: 'female', hometown: 'Tirupati', dob: '06-08-2000', responseStatus: "APPROVED" },
    { username: 'Zaheer', phoneNumber: '6303640599', emailId: 'zaheer@gmail.com', sex: 'male', hometown: 'Kadapa', dob: '01-09-2000', responseStatus: "PENDING" },
    { username: 'Vinla', phoneNumber: '6403648579', emailId: 'vinla@gmail.com', sex: 'female', hometown: 'Proddatur', dob: '07-12-2000', responseStatus: "APPROVED" },
    { username: 'Ramya', phoneNumber: '6303640467', emailId: 'ramya@gmail.com', sex: 'female', hometown: 'Nellore', dob: '05-07-2000', responseStatus: "PENDING" },
    { username: 'Sudha', phoneNumber: '8639590588', emailId: 'sudha@gmail.com', sex: 'male', hometown: 'Duvvur', dob: '23-05-2000', responseStatus: "PENDING" },
    { username: 'Harsha', phoneNumber: '6303640577', emailId: 'harsha@gmail.com', sex: 'male', hometown: 'Bglr', dob: '26-08-2000', responseStatus: "PENDING" },
]
export const allbooks = [
    { bookId: '1', bookName: 'HarryPotter', authorName: 'Jyothi', quantity: 5 },
    { bookId: '2', bookName: 'HalfGF', authorName: 'Chetan', quantity: 3 },
    { bookId: '3', bookName: 'RichDad', authorName: 'Robert', quantity: 15 },
    { bookId: '4', bookName: 'Alchemist', authorName: 'Geetha', quantity: 7 },
    { bookId: '5', bookName: 'thinkMonk', authorName: 'Shetty', quantity: 8 },
    { bookId: '6', bookName: 'Mind', authorName: 'Vandana', quantity: 9 },
    { bookId: '7', bookName: 'BhagavatGeetha', authorName: 'Krishna', quantity: 10 },
    { bookId: '8', bookName: 'Doremon', authorName: 'MrCat', quantity: 25 },
    { bookId: '9', bookName: 'Sinchan', authorName: 'Joe', quantity: 5 },
    { bookId: '10', bookName: 'HarryPotter1', authorName: 'Jyothi1', quantity: 5 },
    { bookId: '11', bookName: 'Ramayanam', authorName: 'Valmiki', quantity: 15 },
    { bookId: '12', bookName: 'HalfGF1', authorName: 'Chetan1', quantity: 3 },
    { bookId: '13', bookName: 'RichDad1', authorName: 'Robert1', quantity: 15 },
    { bookId: '14', bookName: 'Alchemist1', authorName: 'Geetha1', quantity: 7 },
    { bookId: '15', bookName: 'thinkMonk1', authorName: 'Shetty1', quantity: 8 },
    { bookId: '16', bookName: 'Mind1', authorName: 'Vandana1', quantity: 9 },
    { bookId: '17', bookName: 'BhagavatGeetha1', authorName: 'Krishna1', quantity: 10 },
    { bookId: '18', bookName: 'Doremon1', authorName: 'MrCat1', quantity: 25 },
    { bookId: '19', bookName: 'Sinchan1', authorName: 'Joe1', quantity: 5 },
]

export const issues = [
    { bookName: 'HarryPotter', authorName: 'Jyothi', customername: 'Sanjay' },
    { bookName: 'HalfGF', authorName: 'Chetan', customername: 'Hari' },

]

export const issuereq = [
    { title: 'HarryPotter', requestdate: '23-02-2023', approvedate: '24-02-2023', returndate: '03-03-2023' },
    { title: 'HalfGF', requestdate: '24-02-2023', approvedate: '25-02-2023', returndate: '04-03-2023' },
    { title: 'RichDad', requestdate: '25-02-2023', approvedate: '26-02-2023', returndate: '05-03-2023' },
    { title: 'Alchemist', requestdate: '26-02-2023', approvedate: '27-02-2023', returndate: '06-03-2023' },
    { title: 'thinkMonk', requestdate: '27-02-2023', approvedate: '28-02-2023', returndate: '07-03-2023' },
    { title: 'Mind', requestdate: '28-02-2023', approvedate: '29-02-2023', returndate: '08-03-2023' },
]
export const allbooks1 = [
    { serialno: '1', title: 'HarryPotter', author: 'Jyothi', quantity: 5 },
    { serialno: '2', title: 'HalfGF', author: 'Chetan', quantity: 3 },
    { serialno: '3', title: 'RichDad', author: 'Robert', quantity: 15 },
    { serialno: '4', title: 'Alchemist', author: 'Geetha', quantity: 7 },
    { serialno: '5', title: 'thinkMonk', author: 'Shetty', quantity: 8 },
    { serialno: '6', title: 'Mind', author: 'Vandana', quantity: 9 },
    { serialno: '7', title: 'BhagavatGeetha', author: 'Krishna', quantity: 10 },
    { serialno: '8', title: 'Doremon', author: 'MrCat', quantity: 25 },
    { serialno: '9', title: 'Sinchan', author: 'Joe', quantity: 5 },
]

