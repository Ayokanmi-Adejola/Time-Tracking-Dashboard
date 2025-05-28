document.addEventListener('DOMContentLoaded', () => {
  // Default time period
  let currentTimePeriod = 'weekly';
  
  // Embed the data directly to avoid CORS issues when opening the file locally
  const activityData = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 2,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ];

  // Initialize the dashboard
  renderActivityCards(activityData, currentTimePeriod);
  setupEventListeners();

  // Set up event listeners for time period buttons
  function setupEventListeners() {
    const timeButtons = document.querySelectorAll('.time-btn');
    
    timeButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        timeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update time period and re-render cards
        currentTimePeriod = button.dataset.time;
        renderActivityCards(activityData, currentTimePeriod);
      });
    });
  }

  // Render activity cards based on the selected time period
  function renderActivityCards(data, timePeriod) {
    const activityCardsContainer = document.querySelector('.activity-cards');
    activityCardsContainer.innerHTML = '';

    data.forEach(activity => {
      const title = activity.title;
      const currentHours = activity.timeframes[timePeriod].current;
      const previousHours = activity.timeframes[timePeriod].previous;
      
      // Format the title for CSS class (lowercase and hyphenated)
      const titleClass = title.toLowerCase().replace(/\s+/g, '-');
      
      // Determine the icon path based on the activity title
      const iconPath = `./images/icon-${titleClass}.svg`;
      
      // Format hours text (singular vs plural)
      const currentHoursText = currentHours === 1 ? '1hr' : `${currentHours}hrs`;
      const previousHoursText = previousHours === 1 ? '1hr' : `${previousHours}hrs`;
      
      // Determine the previous period text based on the time period
      let previousPeriodText = '';
      switch(timePeriod) {
        case 'daily':
          previousPeriodText = 'Yesterday';
          break;
        case 'weekly':
          previousPeriodText = 'Last Week';
          break;
        case 'monthly':
          previousPeriodText = 'Last Month';
          break;
      }

      // Create the activity card HTML
      const activityCardHTML = `
        <div class="activity-card ${titleClass}">
          <div class="activity-card-bg">
            <img src="${iconPath}" alt="${title} icon">
          </div>
          <div class="activity-card-content">
            <div class="activity-header">
              <h2 class="activity-title">${title}</h2>
              <img src="./images/icon-ellipsis.svg" alt="More options" class="ellipsis">
            </div>
            <div class="activity-stats">
              <p class="activity-time">${currentHoursText}</p>
              <p class="activity-previous">${previousPeriodText} - ${previousHoursText}</p>
            </div>
          </div>
        </div>
      `;

      activityCardsContainer.innerHTML += activityCardHTML;
    });
  }
});
