import React from "react";
import { Routes , Route } from 'react-router-dom'


import Login from "./components/pages/Authentication";
import BlogView from "./components/pages/Blog/BlogView";
import PendingBlog from "./components/pages/Blog/PendingBlog";
import AddBlog from "./components/pages/Blog/AddBlog";
import EditBlog from "./components/pages/Blog/EditBlog";
import BlankPage from "./components/pages/Blank/BlankPage";
import BasicTable from "./components/pages/Table/BasicTable";
import DataTable from "./components/pages/Table/DataTable";
import Students from "./components/pages/Students/StudentsList";
import InvoiceGrid from "./components/pages/Invoice/InvoiceGrid";
import AddInvoice from "./components/pages/Invoice/AddInvoice";
import EditInvoice from "./components/pages/Invoice/EditInvoice";
import ViewInvoice from "./components/pages/Invoice/ViewInvoice";
import InvoiceSettings from "./components/pages/Invoice/InvoiceSettings";
import InvoiceList from "./components/pages/Invoice/InvoiceList";
import Register from "./components/pages/Authentication/Register";
import ForgotPassword from "./components/pages/Authentication/ForgotPassword";
import AdminDashboard from "./components/pages/Dashboard/AdminDashboard";
import Blogdetails from "./components/pages/Blog/Blogdetails";
import Profile from "./components/pages/Blog/Profile";
import TaxSetting from "./components/pages/Invoice/TaxSetting";
import BankSetting from "./components/pages/Invoice/BankSetting";
import Inbox from "./components/Header/Inbox ";
import Compose from "./components/Header/Compose";
import StudentsDashboard from "./components/pages/Dashboard/StudentsDashboard";
import TeacherDashboard from "./components/pages/Dashboard/TeacherDashboard";
import StudentsView from "./components/pages/Students/StudentsView";
import AddStudent from "./components/pages/Students/AddStudent";
import EditStudent from "./components/pages/Students/EditStudent";
import StudentGrid from "./components/pages/Students/StudentGrid";
import InvoicePaid from "./components/pages/Invoice/InvoicePaid";
import InvoiceOverdue from "./components/pages/Invoice/InvoiceOverdue";
import InvoiceDraft from "./components/pages/Invoice/InvoiceDraft";
import InvoiceRecurring from "./components/pages/Invoice/InvoiceRecurring";
import InvoiceCancelled from "./components/pages/Invoice/InvoiceCancelled";
import TeachersList from "./components/pages/Teachers/Teacherslist";
import TeachersProfile from "./components/pages/Teachers/TeachersProfile";
import TeachersAdd from "./components/pages/Teachers/TeachersAdd";
import TeachersEdit from "./components/pages/Teachers/TeachersEdit";
import TeachersGrid from "./components/pages/Teachers/TeachersGrid";
import DepartmentList from "./components/pages/Department/DepartmentList";
import AddDepartment from "./components/pages/Department/AddDepartment";
import EditDepartment from "./components/pages/Department/EditDepartment";
import SubjectList from "./components/pages/Subject/SubjectList";
import AddSubject from "./components/pages/Subject/AddSubject";
import EditSubject from "./components/pages/Subject/EditSubject";
// Settings
import GendralSettings from "./components/pages/Settings/GendralSettings";
import Localization from "./components/pages/Settings/Localization";
import PaymentSettings from "./components/pages/Settings/PaymentSettings";
import EmailSettings from "./components/pages/Settings/EmailSettings";
import SocialSettings from "./components/pages/Settings/SocialSettings";
import SocialLinks from "./components/pages/Settings/SocialLinks";
import Seo from "./components/pages/Settings/Seo";
import OtherSettings from "./components/pages/Settings/OtherSettings";
//Library
import LibraryList from "./components/pages/Library/LibraryList";
import AddBook from "./components/pages/Library/AddBook";
import FeesCollection from "./components/pages/Accounts/FeesCollection";
import Expenses from "./components/pages/Accounts/Expenses";
import Salary from "./components/pages/Accounts/Salary";
import AddFeesCollection from "./components/pages/Accounts/AddFeesCollection";
import AddExpenses from "./components/pages/Accounts/AddExpenses";
import AddSalary from "./components/pages/Accounts/AddSalary";
import Holiday from "./components/pages/Holiday/Holiday";
import AddHoliday from "./components/pages/Holiday/AddHoliday";
import Fees from "./components/pages/Fees/Fees";
import AddFees from "./components/pages/Fees/AddFees";
import EditFees from "./components/pages/Fees/EditFees";
import Exam from "./components/pages/Exam List/Exam";
import AddExam from "./components/pages/Exam List/AddExam";
import EditExam from "./components/pages/Exam List/EditExam";
import TimeTable from "./components/pages/Time Table/TimeTable";
import AddTimeTable from "./components/pages/Time Table/AddTimeTable";
import EditTimeTable from "./components/pages/Time Table/EditTimeTable";
import EditBook from "./components/pages/Library/EditBook";
import Sports from "./components/pages/Sports/Sports";
import AddSports from "./components/pages/Sports/AddSports";
import EditSports from "./components/pages/Sports/EditSports";
import Hostel from "./components/pages/Hostel/Hostel";
import AddHostel from "./components/pages/Hostel/AddHostel";
import EditHostel from "./components/pages/Hostel/EditHostel";
import Transport from "./components/pages/Transports/Transport";
import AddTransport from "./components/pages/Transports/AddTransport";
import EditTransport from "./components/pages/Transports/EditTransport";
import Event from "./components/pages/Events/Event";
import AddEvent from "./components/pages/Events/AddEvent";
import BasicTables from "./components/pages/Table/BasicTable";
import DataTables from "./components/pages/Table/DataTable";
import BasicInputs from "./components/pages/Forms/BasicInputs";
import FormInputGroups from "./components/pages/Forms/FormInputGroups";
import FormMask from "./components/pages/Forms/FormMask";
import FormValidation from "./components/pages/Forms/FormValidation";
import HorizontalForm from "./components/pages/Forms/HorizontalForm";
import VerticalForm from "./components/pages/forms/VerticalForm";
import FeatherIcons from "./components/pages/Icons/Feather";
import FlagIcons from "./components/pages/Icons/Flag";
import FontawesomeIcons from "./components/pages/Icons/Font-awesome";
import IonicIcons from "./components/pages/Icons/Ionic";
import MaterialIcons from "./components/pages/Icons/Material";
import PE7Icons from "./components/pages/Icons/Pe7";
import SimplelineIcons from "./components/pages/Icons/Simpleline";
import ThemifyIcons from "./components/pages/Icons/Themify";
import WeatherIcons from "./components/pages/Icons/Weather";
import TypiconIcons from "./components/pages/Icons/Typicon";
import Ribbon from "./components/pages/Elements/Ribbon";
import Rating from "./components/pages/Elements/Rating";
import Texteditor from "./components/pages/Elements/Texteditor";
import Counter from "./components/pages/Elements/Counter";
import Scrollbar from "./components/pages/Elements/ScrollBar";
import Notification from "./components/pages/Elements/Notification";
import Stickynote from "./components/pages/Elements/StickyNote";
import Timeline from "./components/pages/Elements/TimeLine";
import Formwizard from "./components/pages/Elements/FormWizard";
import HorizontalTimeLine from "./components/pages/Elements/HorizontalTimeLine";
import ApexCharts from "./components/pages/Charts/ApexChart";
import ChartJs from "./components/pages/Charts/ChartJs";
import MorrisCharts from "./components/pages/Charts/MorrisChart";
import FlotCharts from "./components/pages/Charts/FlotChart";
import PeityChart from "./components/pages/Charts/PeityChart";
import C3Charts from "./components/pages/Charts/C3Chart";
import ClipBoard from "./components/pages/Elements/ClipBoard";
import UiTooltip from "./components/pages/Base UI/tooltip";
import Toastr from "./components/pages/Base UI/Toast";
import Spinner from "./components/pages/Base UI/Spinner";
import PopOver from "./components/pages/Base UI/PopOver";
import LightBox from "./components/pages/Base UI/LightBox";
import Cards from "./components/pages/Base UI/Cards";
import Pagination from "./components/pages/Base UI/Pagination";
import Tableavatar from "./components/pages/Base UI/Avatar";
import Tabs from "./components/pages/Base UI/Tabs";
import Typography from "./components/pages/Base UI/Typography";
import Progressbar from "./components/pages/Base UI/ProgressBar";
import Buttons from "./components/pages/Base UI/Buttons";
import Video from "./components/pages/Base UI/Video";
import Sweetalert from "./components/pages/Base UI/SweetAlert";
import Images from "./components/pages/Base UI/Images";
import Grid from "./components/pages/Base UI/Grid";
import ButtonGroup from "./components/pages/Base UI/ButtonGroup";
import Badge from "./components/pages/Base UI/Badge";
import Accordion from "./components/pages/Base UI/Accordion";
import Alert from "./components/pages/Base UI/Alert";
import PlaceHolder from "./components/pages/Base UI/PlaceHolder";
import OffCanvas from "./components/pages/Base UI/OffCanvas";
import Modal from "./components/pages/Base UI/Modal";
import Media from "./components/pages/Base UI/Media";
import Carousel from "./components/pages/Base UI/Carousel";
import BreadCrumbs from "./components/pages/Base UI/BreadCrumbs";
import Error404 from "./components/pages/Authentication/Error-404";
import RangeSlider from "./components/pages/Base UI/RangeSlider";
import DragDrop from "./components/pages/Elements/Drag&Drop";
import Clipboard from "./components/pages/Elements/ClipBoard";
import Dropdown from "./components/pages/Base UI/DropDown";
import EditEvent from "./components/pages/Events/EditEvent";

const App = ({props}) => {
  return (
   <>
     <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/forgotpassword" exact element={<ForgotPassword/>} />
        <Route path="/error404" exact element={<Error404/>} />

        <Route path="/admindashboard" exact element={<AdminDashboard/>} />
        <Route path="/teacherdashboard" exact element={<TeacherDashboard/>} />
        <Route path="/studentdashboard" exact element={<StudentsDashboard/>} />

        <Route path="/blog" exact element={<BlogView/>} />
        <Route path="/pendingblog" exact element={<PendingBlog/>} />
        <Route path="/addblog" exact element={<AddBlog/>} />
        <Route path="/editblog" exact element={<EditBlog/>} />
        <Route path="/blogdetails" exact element={<Blogdetails/>} />
        <Route path="/profile" exact element={<Profile/>} />

        <Route path="/blankpage" exact element={<BlankPage/>} />
        <Route path="/basictable" exact element={<BasicTable/>} />
        <Route path="/datatable" exact element={<DataTable/>} />

        <Route path="/students" exact element={<Students/>} />
        <Route path="/studentsview" exact element={<StudentsView/>} />
        <Route path="/addstudent" exact element={<AddStudent/>} />
        <Route path="/editstudent" exact element={<EditStudent/>} />
        <Route path="/studentgrid" exact element={<StudentGrid/>} />

        <Route path="/invoicegrid" exact element={<InvoiceGrid/>} />
        <Route path="/invoicepaid" exact element={<InvoicePaid/>} />
        <Route path="/invoiceoverdue" exact element={<InvoiceOverdue/>} />
        <Route path="/invoicedraft" exact element={<InvoiceDraft/>} />
        <Route path="/invoicerecurring" exact element={<InvoiceRecurring/>} />
        <Route path="/invoicecancelled" exact element={<InvoiceCancelled/>} />
        <Route path="/addinvoice" exact element={<AddInvoice/>} />
        <Route path="/editinvoice" exact element={<EditInvoice/>} />
        <Route path="/viewinvoice" exact element={<ViewInvoice/>} />
        <Route path="/invoicesetting" exact element={<InvoiceSettings/>} />
        <Route path="/invoicelist" exact element={<InvoiceList/>} />
        <Route path="/taxsetting" exact element={<TaxSetting/>} />
        <Route path="/banksetting" exact element={<BankSetting/>} />

        <Route path="/inbox" exact element={<Inbox/>} />
        <Route path="/compose" exact element={<Compose/>} />

        {/* Settings */}
        <Route path="/generalsettings" exact element={<GendralSettings/>} />
        <Route path="/localization" exact element={<Localization/>} />
        <Route path="/paymentsettings" exact element={<PaymentSettings/>} />
        <Route path="/emailsettings" exact element={<EmailSettings/>} />
        <Route path="/socialsettings" exact element={<SocialSettings/>} />
        <Route path="/sociallinks" exact element={<SocialLinks/>} />
        <Route path="/seo" exact element={<Seo/>} />
        <Route path="/othersettings" exact element={<OtherSettings/>} />

        <Route path="/librarylist" exact element={<LibraryList/>} />
        <Route path="/addbook" exact element={<AddBook/>} />
        <Route path="/editbook" exact element={<EditBook/>} />

        <Route path="/teacherslist" exact element={<TeachersList/>} />
        <Route path="/teachersprofile" exact element={<TeachersProfile/>} />
        <Route path="/addteacher" exact element={<TeachersAdd/>} />
        <Route path="/editteacher" exact element={<TeachersEdit/>} />
        <Route path="/teachersgrid" exact element={<TeachersGrid/>} />

        <Route path="/department" exact element={<DepartmentList/>} />
        <Route path="/adddepartment" exact element={<AddDepartment/>} />
        <Route path="/editdepartment" exact element={<EditDepartment/>} />

        <Route path="/subject" exact element={<SubjectList/>} />
        <Route path="/addsubject" exact element={<AddSubject/>} />
        <Route path="/editsubject" exact element={<EditSubject/>} />

        <Route path="/feescollection" exact element={<FeesCollection/>} />
        <Route path="/addfeescollection" exact element={<AddFeesCollection/>} />
        <Route path="/expenses" exact element={<Expenses/>} />
        <Route path="/addexpenses" exact element={<AddExpenses/>} />
        <Route path="/salary" exact element={<Salary/>} />
        <Route path="/addsalary" exact element={<AddSalary/>} />

        <Route path="/holiday" exact element={<Holiday/>} />
        <Route path="/addholiday" exact element={<AddHoliday/>} />

        <Route path="/fees" exact element={<Fees/>} />
        <Route path="/addfees" exact element={<AddFees/>} />
        <Route path="/editfees" exact element={<EditFees/>} />

        <Route path="/exam" exact element={<Exam/>} />
        <Route path="/addexam" exact element={<AddExam/>} />
        <Route path="/editexam" exact element={<EditExam/>} />

        <Route path="/timetable" exact element={<TimeTable/>} />
        <Route path="/addtimetable" exact element={<AddTimeTable/>} />
        <Route path="/edittimetable" exact element={<EditTimeTable/>} />

        <Route path="/sports" exact element={<Sports/>} />
        <Route path="/addsports" exact element={<AddSports/>} />
        <Route path="/editsports" exact element={<EditSports/>} />

        <Route path="/hostel" exact element={<Hostel/>} />
        <Route path="/addhostel" exact element={<AddHostel/>} />
        <Route path="/edithostel" exact element={<EditHostel/>} />

        <Route path="/transport" exact element={<Transport/>} />
        <Route path="/addtransport" exact element={<AddTransport/>} />
        <Route path="/edittransport" exact element={<EditTransport/>} />

        <Route path="/event" exact element={<Event/>} />
        <Route path="/addevent" exact element={<AddEvent/>} />
        <Route path="/editevent" exact element={<EditEvent/>} />

        <Route path="/basictable" exact element={<BasicTables/>} />
        <Route path="/datatable" exact element={<DataTables/>} />

        <Route path="/basicinput" exact element={<BasicInputs/>} />
        <Route path="/forminputgroup" exact element={<FormInputGroups/>} />
        <Route path="/formmask" exact element={<FormMask/>} />
        <Route path="/formvalidation" exact element={<FormValidation/>} />
        <Route path="/horizontalform" exact element={<HorizontalForm/>} />
        <Route path="/verticalform" exact element={<VerticalForm/>} />

        <Route path="/feathericons" exact element={<FeatherIcons/>} />
        <Route path="/flagicons" exact element={<FlagIcons/>} />
        <Route path="/fontawesomeicons" exact element={<FontawesomeIcons/>} />
        <Route path="/iconicicons" exact element={<IonicIcons/>} />
        <Route path="/materialicons" exact element={<MaterialIcons/>} />
        <Route path="/flagicons" exact element={<FlagIcons/>} />
        <Route path="/pe7icons" exact element={<PE7Icons/>} />
        <Route path="/simplelineicons" exact element={<SimplelineIcons/>} />
        <Route path="/themifyicons" exact element={<ThemifyIcons/>} />
        <Route path="/weathericons" exact element={<WeatherIcons/>} />
        <Route path="/typiconicons" exact element={<TypiconIcons/>} />

        <Route path="/ribbon" exact element={<Ribbon/>} />
        <Route path="/dragdrop" exact element={<DragDrop/>} />
        <Route path="/clipboard" exact element={<Clipboard/>} />
        <Route path="/rating" exact element={<Rating/>} />
        <Route path="/texteditor" exact element={<Texteditor/>} />
        <Route path="/counter" exact element={<Counter/>} />
        <Route path="/scrollbar" exact element={<Scrollbar/>} />
        <Route path="/notification" exact element={<Notification/>} />
        <Route path="/stickynote" exact element={<Stickynote/>} />
        <Route path="/timeline" exact element={<Timeline/>} />
        <Route path="/horizontaltimeline" exact element={<HorizontalTimeLine/>} />
        <Route path="/formwizard" exact element={<Formwizard/>} />

        <Route path="/apexchart" exact element={<ApexCharts/>} />
        <Route path="/chartjs" exact element={<ChartJs/>} />
        <Route path="/morrischart" exact element={<MorrisCharts/>} />
        <Route path="/flotchart" exact element={<FlotCharts/>} />
        <Route path="/peitychart" exact element={<PeityChart/>} />
        <Route path="/c3chart" exact element={<C3Charts/>} />

        <Route path="/tooltip" exact element={<UiTooltip/>} />
        <Route path="/toast" exact element={<Toastr/>} />
        <Route path="/spinner" exact element={<Spinner/>} />
        <Route path="/popover" exact element={<PopOver/>} />
        <Route path="/rangeslider" exact element={<RangeSlider/>} />
        <Route path="/lightbox" exact element={<LightBox/>} />
        <Route path="/cards" exact element={<Cards/>} />
        <Route path="/dropdown" exact element={<Dropdown/>} />
        <Route path="/pagination" exact element={<Pagination/>} />
        <Route path="/avatar" exact element={<Tableavatar/>} />
        <Route path="/tabs" exact element={<Tabs/>} />
        <Route path="/typography" exact element={<Typography/>} />
        <Route path="/progressbar" exact element={<Progressbar/>} />
        <Route path="/buttons" exact element={<Buttons/>} />
        <Route path="/video" exact element={<Video/>} />
        <Route path="/sweetalert" exact element={<Sweetalert/>} />
        <Route path="/images" exact element={<Images/>} />
        <Route path="/grid" exact element={<Grid/>} />
        <Route path="/buttongroup" exact element={<ButtonGroup/>} />
        <Route path="/badge" exact element={<Badge/>} />
        <Route path="/accordion" exact element={<Accordion/>} />
        <Route path="/alert" exact element={<Alert/>} />
        <Route path="/placeholder" exact element={<PlaceHolder/>} />
        <Route path="/offcanvas" exact element={<OffCanvas/>} />
        <Route path="/media" exact element={<Media/>} />
        <Route path="/carousel" exact element={<Carousel/>} />
        <Route path="/breadcrumbs" exact element={<BreadCrumbs/>} />
        <Route path="/modal" exact element={<Modal/>} />
      </Routes>
   </>
  )
}

export default App
