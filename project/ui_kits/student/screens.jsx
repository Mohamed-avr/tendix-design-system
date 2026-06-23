/* Tendix — Student app UI kit screens.
   Recreation of the Figma Student flow: Login → Home → Attendances →
   Class detail → Profile. Composes the design-system components. */
const DS = window.DesignSystem_83ace9;
const { Logo, ProfileHeader, ClassCard, ClassRow, StatusBadge, AttendanceGrid,
        BottomNav, Card, Badge, Chip, Button, IconButton, Icon, Select,
        Pagination, SettingRow, Divider, Avatar, Input } = DS;

const STUDENT = { name: 'Azol, Mohamed', full: 'BOUKHANOUF MOHAMED', year: 'L3', section: 'A6' };

const HISTORY = [
  { time:'08:00 AM', date:'2025/05/03', teacher:'Hanad Farid', module:'OV', status:'running', running:true },
  { time:'08:00 AM', date:'2025/05/03', teacher:'Hanad Farid', module:'Math 5', status:'absent', note:'Not Justified', noteColor:'var(--tx-text-tertiary)' },
  { time:'08:00 AM', date:'2025/05/03', teacher:'Hanad Farid', module:'Math 5', status:'absent', note:'Justification Rejected', noteColor:'var(--tx-attend-rejected)' },
  { time:'08:00 AM', date:'2025/05/03', teacher:'Hanad Farid', module:'Physics 3', status:'attended' },
  { time:'08:00 AM', date:'2025/05/03', teacher:'Hanad Farid', module:null, status:'canceled', hasDoc:false },
  { time:'08:00 AM', date:'2025/05/03', teacher:'Hanad Farid', module:'Math 5', status:'absent', note:'Justified', noteColor:'var(--tx-attend-justified)' },
];

const ATT = [
  { module:'OV', status:'attended' },
  { module:'Physics 4', status:'absent' },
  { module:'OV', status:'absent', note:'Justified', noteColor:'var(--tx-attend-justified)' },
  { module:'Physics 3', status:'attended' },
  { module:'Physics 3', status:'attended' },
  { module:'Physics 3', status:'attended' },
  { module:'Physics 3', status:'attended' },
  { module:'OV', status:'absent', note:'Justified', noteColor:'var(--tx-attend-justified)' },
  { module:'Physics 3', status:'attended' },
  { module:'OV', status:'absent' },
];

/* ---------- Screen header (greeting pill) ---------- */
function Greeting({ onBell, lang }) {
  return <ProfileHeader name={STUDENT.name} showLanguage={lang} onBell={onBell} />;
}

/* ---------- HOME ---------- */
function Home({ go }) {
  return (
    <div className="screen">
      <Greeting onBell={() => go('notifications')} />
      <Card style={{ marginTop: 18, padding: 0, overflow: 'hidden' }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 18px', background:'var(--tx-surface-sunken)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, font:'700 13px var(--tx-font-ui)', color:'var(--tx-text-strong)', letterSpacing:'.02em' }}>
            <span>{STUDENT.full}</span>
            <span style={{ width:1, height:16, background:'var(--tx-border)' }} />
            <span style={{ color:'var(--tx-text-secondary)' }}>ENGINEERING PROCESS</span>
          </div>
          <div style={{ display:'flex', gap:8 }}><Badge>{STUDENT.year}</Badge><Badge>{STUDENT.section}</Badge></div>
        </div>
        <div style={{ display:'flex', gap:18, padding:18 }}>
          <div style={{ width:120, flexShrink:0, display:'flex', flexDirection:'column', gap:8 }}>
            <div style={{ width:120, height:130, borderRadius:14, background:'var(--tx-ink)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,.5)' }}>
              <Icon name="User" size={40} weight="fill" />
            </div>
          </div>
          <div style={{ flex:1, display:'flex', flexDirection:'column' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
              <Badge color="success" dot>SUPER</Badge>
              <span style={{ font:'500 12px var(--tx-font-ui)', color:'var(--tx-text-tertiary)' }}>This Month · February</span>
            </div>
            <AttendanceGrid columns={5} gap={7} />
            <div style={{ marginTop:'auto', textAlign:'right', paddingTop:10 }}>
              <Chip size="sm">2025/2026 · BEJAIA</Chip>
            </div>
          </div>
        </div>
      </Card>

      <h3 style={{ margin:'22px 2px 12px', fontSize:20 }}>Your Started Classes</h3>
      <ClassCard onFind={() => go('detail')} />

      <div style={{ display:'flex', alignItems:'center', gap:12, margin:'24px 2px 12px' }}>
        <h3 style={{ fontSize:20 }}>Classes History</h3>
        <span style={{ font:'500 14px var(--tx-font-ui)', color:'var(--tx-text-tertiary)' }}>/ Group A6</span>
        <span style={{ flex:1 }} />
        <Select value="February" size="sm" />
        <IconButton variant="outlined" onClick={() => go('attendances')}><Icon name="ArrowRight" size={18} /></IconButton>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {HISTORY.map((h,i) => <ClassRow key={i} {...h} teacher={h.teacher} onClick={() => go('detail')} />)}
      </div>
    </div>
  );
}

/* ---------- ATTENDANCES ---------- */
function Attendances() {
  const [page, setPage] = React.useState(4);
  return (
    <div className="screen">
      <Greeting />
      <Card style={{ marginTop:18 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
          <h2 style={{ fontSize:24, flex:1 }}>Attendances</h2>
          <IconButton variant="outlined"><Icon name="X" size={18} /></IconButton>
          <IconButton variant="outlined"><Icon name="Check" size={18} /></IconButton>
          <Select value="February" size="sm" />
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
          {ATT.map((a,i) => <ClassRow key={i} {...a} teacher="Hanad Farid" />)}
        </div>
        <div style={{ display:'flex', justifyContent:'center', marginTop:20 }}>
          <Pagination count={5} page={page} onChange={setPage} />
        </div>
      </Card>
    </div>
  );
}

/* ---------- CLASS DETAIL / JUSTIFY ---------- */
function Detail({ go }) {
  const Field = ({ label, value, right }) => (
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'16px 0' }}>
      <div><div style={{ font:'500 13px var(--tx-font-ui)', color:'var(--tx-text-tertiary)', marginBottom:4 }}>{label}</div><div style={{ font:'600 17px var(--tx-font-display)', color:'var(--tx-text-strong)' }}>{value}</div></div>
      {right}
    </div>
  );
  return (
    <div className="screen">
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <button onClick={() => go('home')} style={{ display:'inline-flex', alignItems:'center', gap:10, border:'none', background:'var(--tx-surface)', boxShadow:'var(--tx-shadow-sm)', borderRadius:9999, padding:'12px 22px 12px 16px', font:'700 17px var(--tx-font-display)', color:'var(--tx-text-strong)', cursor:'pointer' }}>
          <Icon name="ArrowLeft" weight="bold" size={22} /> Back
        </button>
        <IconButton variant="white"><Icon name="Bell" size={24} /></IconButton>
      </div>
      <Card style={{ marginTop:18, padding:'4px 20px' }}>
        <Field label="Module" value="Ondes Et Vibrations" right={<div style={{display:'flex',alignItems:'center',gap:12,paddingTop:18}}><span style={{color:'var(--tx-text-secondary)',font:'500 15px var(--tx-font-ui)'}}>Absent</span><span style={{width:44,height:44,borderRadius:12,background:'var(--tx-error-soft)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--tx-error)'}}><Icon name="X" weight="bold" size={22}/></span></div>} />
        <Divider />
        <Field label="Teacher" value="Mr Hanad Farid" right={<div style={{textAlign:'right'}}><div style={{font:'500 13px var(--tx-font-ui)',color:'var(--tx-text-tertiary)',marginBottom:4}}>Type</div><div style={{font:'600 17px var(--tx-font-display)',color:'var(--tx-text-strong)'}}>TD</div></div>} />
        <Divider />
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 0' }}>
          <div>
            <div style={{ font:'500 13px var(--tx-font-ui)', color:'var(--tx-text-tertiary)', marginBottom:8 }}>Resources</div>
            <span style={{ width:48, height:48, borderRadius:12, background:'var(--tx-surface-sunken)', display:'inline-flex', alignItems:'center', justifyContent:'center', color:'var(--tx-text-secondary)', position:'relative' }}>
              <Icon name="FileText" size={24} /><span style={{ position:'absolute', right:5, bottom:6, width:12, height:12, borderRadius:'50%', background:'var(--tx-warning-accent)' }} />
            </span>
          </div>
          <Button variant="text" color="accent">Download Documents</Button>
        </div>
        <Divider />
        <div style={{ padding:'16px 0' }}>
          <div style={{ font:'500 13px var(--tx-font-ui)', color:'var(--tx-text-tertiary)', marginBottom:8 }}>Description</div>
          <p style={{ margin:0, font:'400 16px var(--tx-font-ui)', color:'var(--tx-text)', lineHeight:1.5 }}>Please Also Ensure That All Pending Assignments Are Submitted On Time, And Be Prepared For Upcoming Evaluations. Staying Consistent Now Will Make The End Of The Year Much Easier.</p>
          <div style={{ marginTop:16, display:'flex', alignItems:'baseline', gap:10, font:'600 17px var(--tx-font-data)' }}>08:00 AM <span style={{ color:'var(--tx-text-tertiary)', fontSize:13 }}>2025/05/03</span></div>
        </div>
      </Card>
      <button style={{ width:'100%', marginTop:18, height:60, borderRadius:9999, border:'1.5px dashed var(--tx-accent)', background:'transparent', color:'var(--tx-accent)', font:'600 18px var(--tx-font-display)', cursor:'pointer' }}>Justify your absense</button>
    </div>
  );
}

/* ---------- PROFILE / SETTINGS ---------- */
function Profile({ go }) {
  return (
    <div className="screen">
      <Greeting lang />
      <Card style={{ marginTop:18 }}>
        <div style={{ display:'flex', gap:16 }}>
          <div style={{ flex:1 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <span style={{ width:36, height:36, borderRadius:'50%', background:'var(--tx-grey-16)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--tx-text-secondary)' }}><Icon name="User" size={20} /></span>
              <span style={{ font:'700 14px var(--tx-font-ui)', color:'var(--tx-text-strong)', letterSpacing:'.02em' }}>{STUDENT.full}</span>
              <IconButton size="sm" color="muted"><Icon name="PencilSimple" size={18} /></IconButton>
            </div>
            <div style={{ font:'600 15px var(--tx-font-ui)', color:'var(--tx-text)', lineHeight:1.9 }}>YEAR 3<br/>SECTION A<br/>GROUP N 6</div>
            <div style={{ marginTop:14, font:'500 14px var(--tx-font-ui)', color:'var(--tx-text-secondary)', lineHeight:1.7 }}>2001/07/19 · KHERRATA<br/>SCIENCE AND TECHNOLOGY<br/>ENGINEERING PROCESS</div>
          </div>
          <div style={{ width:140, height:170, borderRadius:14, background:'var(--tx-ink)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(255,255,255,.5)', flexShrink:0 }}>
            <Icon name="User" size={48} weight="fill" />
          </div>
        </div>
      </Card>
      <h3 style={{ margin:'22px 2px 12px', fontSize:20 }}>Setting</h3>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <SettingRow label="Notifications" />
        <SettingRow label="Privacy And Security" />
        <SettingRow label="Log Out" danger trailingIcon="SignOut" onClick={() => go('login')} />
      </div>
    </div>
  );
}

/* ---------- LOGIN ---------- */
function Login({ go }) {
  return (
    <div className="screen" style={{ minHeight:'100%', display:'flex', flexDirection:'column', justifyContent:'center', gap:8 }}>
      <div style={{ display:'flex', justifyContent:'center', marginBottom:18 }}>
        <Logo role="student" size={46} />
      </div>
      <h2 style={{ textAlign:'center', fontSize:26, marginBottom:4 }}>Welcome back</h2>
      <p style={{ textAlign:'center', font:'400 15px var(--tx-font-ui)', color:'var(--tx-text-tertiary)', margin:'0 0 22px' }}>Sign in to check in to your classes.</p>
      <Input label="Matricule" placeholder="21773302" startAdornment={<Icon name="User" size={20}/>} />
      <div style={{ height:14 }} />
      <Input label="Password" type="password" defaultValue="••••••••" endAdornment={<Icon name="EyeSlash" size={20}/>} />
      <div style={{ height:24 }} />
      <Button color="primary" fullWidth size="lg" onClick={() => go('home')}>Sign in</Button>
      <Button variant="text" color="accent" fullWidth onClick={() => go('home')}>Forgot password?</Button>
    </div>
  );
}

/* ---------- APP SHELL ---------- */
function App() {
  const [screen, setScreen] = React.useState('home');
  const go = setScreen;
  const tab = screen === 'attendances' ? 'attendances' : screen === 'profile' ? 'profile' : 'home';
  const showNav = ['home','attendances','profile'].includes(screen);
  const scroll = React.useRef(null);
  React.useEffect(() => { if (scroll.current) scroll.current.scrollTop = 0; }, [screen]);

  let view;
  if (screen === 'login') view = <Login go={go} />;
  else if (screen === 'attendances') view = <Attendances go={go} />;
  else if (screen === 'detail') view = <Detail go={go} />;
  else if (screen === 'profile') view = <Profile go={go} />;
  else view = <Home go={go} />;

  return (
    <div className="phone" data-role="student">
      <div className="status"><span>9:41</span><span style={{display:'inline-flex',gap:6,alignItems:'center'}}><Icon name="Cube" size={15}/><Icon name="GlobeSimple" size={15}/><span style={{width:24,height:12,border:'1.5px solid currentColor',borderRadius:3,display:'inline-block'}}></span></span></div>
      <div className="body" ref={scroll}>{view}</div>
      {showNav && <div className="nav"><BottomNav value={tab} onChange={(v)=>go(v)} /></div>}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
