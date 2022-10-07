import './siderbar.css';
import { LineStyle,Timeline, TrendingUp } from '@material-ui/icons';
// import { Container } from './styles';

export default function Siderbar() {
  return (
    <div className='siderbar'>
      <div className='siderbarwrapper'>
        <div className='sidebarMenu'>
          <h3 className="siderbar">Dashboard</h3>
          <ul className="siderbarList">
            <li className="siderbarListItem">
              <LineStyle />
              Home
            </li>
            <li className="siderbarListItem">
              <Timeline />
              Analytics
            </li>
            <li className="siderbarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



