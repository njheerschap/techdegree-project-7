//Traffic Chart Variables
const trafficCanvas = document.querySelector("#traffic-chart");
const chartToggle = document.querySelector('.chart-toggle')
const hourly = document.querySelector('#hour3')
const daily = document.querySelector('#day3')
const weekly = document.querySelector('#week3')
const monthly = document.querySelector('#month3')

const trafficDataHourly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        fill: true,
        tension: .4
    }]
};
const trafficDataDaily= {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [8000, 15000, 9500, 7500, 16000, 20000, 12000, 14500, 16250, 18250, 11000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        fill: true,
        tension: .4
    }]
};
const trafficDataWeekly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [35000, 75000, 60000, 80000, 45500, 63250, 42500, 72500, 68250, 64000, 73750],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        fill: true,
        tension: .4
    }]
};
const trafficDataMonthly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [125000, 150000, 175000, 132250, 195500, 168250, 137500, 142250, 145000, 156250, 175250],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        fill: true,
        tension: .4
    }]
};
const trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

//Bar Chart Variables

const dailyCanvas = document.querySelector('#daily-chart')

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// Mobile Chart Variables

const mobileCanvas = document.querySelector('#mobile-chart');

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
}

// Alert Banner Variables

const alertBanner = document.querySelector('#alert')

// Alert Icon Variables

const notifications = document.querySelector('#notifications');
const alertContainer = document.querySelector('.alert-container');

// Messaging Variables 

const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

//Search Variables

const userP = document.querySelectorAll('.user');
const userResults = document.querySelector('#results')
const userToMessage = []
const test = ['victoria chambers']
for (let i = 0; i < userP.length; i++) {
    let addUser = userP[i].textContent.toLowerCase();
    userToMessage.push (addUser)
}

notifications.innerHTML = `
<div>
    <ul>
        <li>New message!</li>
        <li>Daily Traffic Update</li>
    </ul>
</div>
`

alertContainer.addEventListener('click', e => {
    if(notifications.style.display === 'none'){
        notifications.style.display = 'block';
    } else {
        notifications.style.display = 'none';
    }
})

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p class="alert-banner-message"><strong>Alert:</strong> You have <strong>10</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains('alert-banner-close')){
        alertBanner.style.display = 'none';
    }
})

send.addEventListener('click', ()=> {
    if (user.value === '' && message.value === '') {
        alert('Please fill out user and message fields before sending');
    } else if (user.value === '') {
        alert('Please fill out user field before sending')
    } else if (message.value === '') {
        alert('Please fill out message field before sending')
    } else {
        alert(`Message successfully sent to ${user.value}`)
    }
    
})

function createTrafficChart(chartElement, chartType, chartData, chartOptions ) {
    let myChart = new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
    });
    hourly.addEventListener('click', () => {
        myChart.data = trafficDataHourly;
        myChart.update();
    }); 
    daily.addEventListener('click', () => {
        myChart.data = trafficDataDaily;
        myChart.update();
    }); 
    weekly.addEventListener('click', () => {
        myChart.data = trafficDataWeekly;
        myChart.update();
    }); 
    monthly.addEventListener('click', () => {
        myChart.data = trafficDataMonthly;
        myChart.update();
    }); 
}

createTrafficChart(trafficCanvas, 'line', trafficDataHourly, trafficOptions );

function createChart(chartElement, chartType, chartData, chartOptions ) {
    let myChart = new Chart(chartElement, {
        type: chartType,
        data: chartData,
        options: chartOptions
    });
}

createChart(dailyCanvas, 'bar', dailyData, dailyOptions);
createChart(mobileCanvas, 'doughnut', mobileData, mobileOptions)

user.addEventListener('input', e =>{
    let searchArray = [];
    if (user.value.length === 0) {
        userResults.style.display = 'none'
    }
    else if (e.target.value){
        searchArray = userToMessage.filter(userName => userName.toLowerCase().includes(e.target.value.toLowerCase()));
        function toTitleCase (userName){
            let seperateWord = userName.toLowerCase().split(' ');
            for(let i = 0; i < seperateWord.length; i++){
                seperateWord[i] = seperateWord[i].charAt(0).toUpperCase() + seperateWord[i].substring(1);
            }
            return seperateWord.join(' ')
        }
        searchArray = searchArray.map(userName => `<li>${toTitleCase(userName)}</li>`);
        userResults.style.display = 'block';
        userResults.addEventListener ('click', e => {
            let selectUser = e.target;
            user.value = selectUser.textContent
            userResults.style.display = 'none'
            console.log(selectUser.textContent)
        })
    }
        autocomplete(searchArray)

})

function autocomplete (searchArray) {
    let html = !searchArray.length ? '' : searchArray.join('');
    userResults.innerHTML = html;
}