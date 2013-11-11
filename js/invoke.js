function addRemoveIndicator(container,containerNumber,badgeName, value) {
        var container = document.getElementById(container),
                button = document.getElementById('addRemove'+containerNumber),
                progress,
                id = 'newIndicator'+containerNumber;
                
        // Add indicator
        if (!button.flag) {
                button.setCaption('Progress: ' +value+ ' out of 100');
                button.flag = true;
                // Create our progress bar
                progress = document.createElement('progress'+containerNumber);
                progress.setAttribute('max','100');
                progress.setAttribute('value',value);
                progress.setAttribute('id',id);                
                progress = bb.progress.style(progress);
                container.appendChild(progress);               
                bb.refresh();
        } else {// Remove indicator
                button.setCaption(badgeName);
                button.flag = false;
                progress = document.getElementById(id);
                progress.remove();
        }        
}