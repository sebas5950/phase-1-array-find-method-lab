function superbowlWin(record) {
    const winYear = record.find(el => el.result === 'W')
        return !!winYear ? winYear.year : undefined
   }