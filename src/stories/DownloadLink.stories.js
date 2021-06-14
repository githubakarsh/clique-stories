
import DownloadLink from "../components/downloadLink/DownloadLink";


export default {
    title: 'Atom/DownloadLink',
    component: DownloadLink,
}

const Template = (args) => <DownloadLink {...args}/>

export const DownloadLinkExample = Template.bind({});

DownloadLinkExample.args = {
    linkName: 'Download your invoice here'
}