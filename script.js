const pokemonData = [
    // 幫每一隻寶可夢加上專屬的 bg 背景設定
    { src: 'bulbasaur.png', zh: '妙蛙種子', en: 'Bulbasaur', bg: 'forest-bg.png' },
    { src: 'caterpie.png', zh: '綠毛蟲', en: 'Caterpie', bg: 'forest-bg.png' },
    { src: 'charmander.png', zh: '小火龍', en: 'Charmander', bg: 'mountain-bg.png' },
    { src: 'clefairy.png', zh: '皮皮', en: 'Clefairy', bg: 'grassland-bg.png' },
    { src: 'diglett.png', zh: '地鼠', en: 'Diglett', bg: 'desert-bg.png' },
    { src: 'geodude.png', zh: '小拳石', en: 'Geodude', bg: 'mountain-bg.png' },
    { src: 'jigglypuff.png', zh: '胖丁', en: 'Jigglypuff', bg: 'village-bg.png' },
    { src: 'meowth.png', zh: '喵喵', en: 'Meowth', bg: 'village-bg.png' },
    { src: 'oddish.png', zh: '走路草', en: 'Oddish', bg: 'grassland-bg.png' },
    { src: 'palpitoad.png', zh: '藍蟾蜍', en: 'Palpitoad', bg: 'river-bg.png' },
    { src: 'pikachu.png', zh: '皮卡丘', en: 'Pikachu', bg: 'village-bg.png' },
    { src: 'psyduck.png', zh: '可達鴨', en: 'Psyduck', bg: 'river-bg.png' },
    { src: 'slowpoke.png', zh: '呆呆獸', en: 'Slowpoke', bg: 'beach-bg.png' },
    { src: 'snorlax.png', zh: '卡比獸', en: 'Snorlax', bg: 'grassland-bg.png' },
    { src: 'squirtle.png', zh: '傑尼龜', en: 'Squirtle', bg: 'river-bg.png' },
    { src: 'vulpix.png', zh: '六尾', en: 'Vulpix', bg: 'desert-bg.png' },
    { src: 'wobbuffet.png', zh: '果然翁', en: 'Wobbuffet', bg: 'village-bg.png' },
    { src: 'muk.png', zh: '臭臭泥', en: 'Muk', bg: 'desert-bg.png' },
    { src: 'jynx.png', zh: '迷唇姐', en: 'Jynx', bg: 'mountain-bg.png' },
    { src: 'greninja.png', zh: '甲賀忍蛙', en: 'Greninja', bg: 'river-bg.png' },
    { src: 'froakie.png', zh: '呱呱泡蛙', en: 'Froakie', bg: 'river-bg.png' },
    { src: 'gardevoir.png', zh: '沙奈朵', en: 'Gardevoir', bg: 'village-bg.png' },
    { src: 'bunnelby.png', zh: '掘地兔', en: 'Bunnelby', bg: 'grassland-bg.png' },
    { src: 'weedle.png', zh: '獨角蟲', en: 'Weedle', bg: 'forest-bg.png' },
    { src: 'pidgey.png', zh: '波波', en: 'Pidgey', bg: 'grassland-bg.png' },
    { src: 'rattata.png', zh: '小拉達', en: 'Rattata', bg: 'village-bg.png' },
    { src: 'raichu.png', zh: '雷丘', en: 'Raichu', bg: 'village-bg.png' },
    { src: 'spearow.png', zh: '烈雀', en: 'Spearow', bg: 'grassland-bg.png' },
    { src: 'sandshrew.png', zh: '穿山鼠', en: 'Sandshrew', bg: 'desert-bg.png' },
    { src: 'zubat.png', zh: '超音蝠', en: 'Zubat', bg: 'mountain-bg.png' },
    { src: 'growlithe.png', zh: '卡蒂狗', en: 'Growlithe', bg: 'grassland-bg.png' },
    { src: 'poliwag.png', zh: '蚊香蝌蚪', en: 'Poliwag', bg: 'river-bg.png' },
    { src: 'abra.png', zh: '凱西', en: 'Abra', bg: 'village-bg.png' },
    { src: 'ponyta.png', zh: '小火馬', en: 'Ponyta', bg: 'grassland-bg.png' },
    { src: 'magnemite.png', zh: '小磁怪', en: 'Magnemite', bg: 'village-bg.png' },
    { src: 'farfetchd.png', zh: '大蔥鴨', en: "Farfetch'd", bg: 'grassland-bg.png' },
    { src: 'gengar.png', zh: '耿鬼', en: 'Gengar', bg: 'forest-bg.png' },
    { src: 'cubone.png', zh: '卡拉卡拉', en: 'Cubone', bg: 'desert-bg.png' },
    { src: 'staryu.png', zh: '海星星', en: 'Staryu', bg: 'beach-bg.png' },
    { src: 'horsea.png', zh: '墨海馬', en: 'Horsea', bg: 'beach-bg.png' },
    { src: 'magikarp.png', zh: '鯉魚王', en: 'Magikarp', bg: 'river-bg.png' },
    { src: 'eevee.png', zh: '伊布', en: 'Eevee', bg: 'grassland-bg.png' },
    { src: 'lapras.png', zh: '拉普拉斯', en: 'Lapras', bg: 'beach-bg.png' },
    { src: 'dragonite.png', zh: '快龍', en: 'Dragonite', bg: 'mountain-bg.png' },
    { src: 'mewtwo.png', zh: '超夢', en: 'Mewtwo', bg: 'mountain-bg.png' },
    { src: 'totodile.png', zh: '小鋸鱷', en: 'Totodile', bg: 'river-bg.png' },
    { src: 'togepi.png', zh: '波克比', en: 'Togepi', bg: 'grassland-bg.png' },
    { src: 'pichu.png', zh: '皮丘', en: 'Pichu', bg: 'village-bg.png' }
];

let recentPokemons = [];

let currentNum1 = null;
let currentNum2 = null;
let timerInterval;
let gameTimeout;
let timeLeft = 30;
let isPlaying = false;
let ndefReader = null;
let hasStartedScanning = false; // 新增：判斷是否已經感應了第一次

const uiNum1 = document.getElementById('num1');
const uiNum2 = document.getElementById('num2');
const uiTimer = document.getElementById('timer');
const uiPokemon = document.getElementById('pokemon-img');
const uiNameZh = document.getElementById('poke-name-zh');
const uiNameEn = document.getElementById('poke-name-en');
const uiMessage = document.getElementById('message-overlay');
const uiMessageBox = document.getElementById('message-box');
const uiMsgZh = document.getElementById('msg-zh');
const uiMsgEn = document.getElementById('msg-en');
const startBtn = document.getElementById('start-btn');
const adminControls = document.getElementById('admin-controls');
const btnPause = document.getElementById('btn-pause');
const btnResetTime = document.getElementById('btn-reset-time');
const btnResetNext = document.getElementById('btn-reset-next');

const soundSuccess = document.getElementById('sound-success');
const soundFail = document.getElementById('sound-fail');
const soundScan = document.getElementById('sound-scan');

function getRandomPokemon() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * pokemonData.length);
    } while (recentPokemons.includes(randomIndex));

    recentPokemons.push(randomIndex);

    if (recentPokemons.length > 5) {
        recentPokemons.shift();
    }

    return pokemonData[randomIndex];
}

function resetGame(changePokemon = true) {
    clearInterval(timerInterval);
    clearTimeout(gameTimeout);
    
    timeLeft = 30;
    uiTimer.innerText = timeLeft;
    currentNum1 = null;
    currentNum2 = null;
    
    uiNum1.innerText = "?";
    uiNum1.className = "num-box empty";
    uiNum2.innerText = "?";
    uiNum2.className = "num-box empty";
    
    // --- 修改點 1：換圖時，確保圖片還是處於隱藏狀態 ---
    if (changePokemon) {
        const newPoke = getRandomPokemon();
        uiPokemon.src = newPoke.src;
        uiNameZh.innerText = newPoke.zh;
        uiNameEn.innerText = newPoke.en;
        
        // 關鍵：延遲一小段時間再把圖片「放出來」
        // 這 100ms 是給瀏覽器換 src 的緩衝時間
        setTimeout(() => {
            uiPokemon.style.transition = 'none';
            uiPokemon.classList.remove('captured-white', 'captured-hide');
            void uiPokemon.offsetWidth; // 強制重繪
            uiPokemon.style.transition = 'all 0.5s ease';
        },220); 

    } else {
        // 如果不需要換下一隻（例如重置時間），則直接顯示
        uiPokemon.style.transition = 'none';
        uiPokemon.classList.remove('captured-white', 'captured-hide');
        void uiPokemon.offsetWidth;
        uiPokemon.style.transition = 'all 0.5s ease';
    }

    uiMessage.style.display = 'none';
    
    isPlaying = true;
    btnPause.innerText = "暫停遊戲 / Pause";
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (!isPlaying) return;

        timeLeft--;
        uiTimer.innerText = timeLeft;
        if (timeLeft <= 0) {
            gameOver(false);
        }
    }, 1000);
}

function handleNumberInput(numString) {
    if (!isPlaying) return;
    const num = parseInt(numString.trim());
    if (isNaN(num)) return;

    if (currentNum1 === null) {
        // 第一個數字輸入：播放音效、填入數字、開始計時
        soundScan.currentTime = 0;
        soundScan.play().catch(e => console.log('音效未載入'));

        currentNum1 = num;
        uiNum1.innerText = currentNum1;
        uiNum1.className = 'num-box filled';

        if (!hasStartedScanning) {
            hasStartedScanning = true;
            startTimer();
        }
    } else if (currentNum2 === null) {
        // 第二個數字輸入：不播放音效，直接填入數字並結算
        currentNum2 = num;
        uiNum2.innerText = currentNum2;
        uiNum2.className = 'num-box filled';
        checkResult();
    }
}

function checkResult() {
    if (currentNum1 + currentNum2 === 10) {
        gameOver(true);
    } else {
        gameOver(false);
    }
}

function gameOver(isSuccess) {
    isPlaying = false;
    clearInterval(timerInterval);

    if (isSuccess) {
        uiMsgZh.innerText = '收服成功！';
        uiMsgEn.innerText = 'Gotcha!';
        uiMessageBox.style.color = '#FFD700';
        uiMessage.style.display = 'flex';
        uiMessageBox.className = 'animate__animated animate__zoomInDown';
        soundSuccess.play().catch(e => console.log('音效未載入'));

        uiPokemon.classList.add('captured-white');
        uiNum1.className = 'num-box filled';
        uiNum2.className = 'num-box filled';

        gameTimeout = setTimeout(() => {
            uiMessageBox.className = 'animate__animated animate__zoomOut';
            uiPokemon.classList.add('captured-hide');
            gameTimeout = setTimeout(() => {
                resetGame(true);
            }, 700);
        }, 2300);
    } else {
        uiMsgZh.innerText = '再加油！';
        uiMsgEn.innerText = 'Keep Trying!';
        uiMessageBox.style.color = '#fff';
        uiMessage.style.display = 'flex';
        uiMessageBox.className = 'animate__animated animate__fadeInDown';
        soundFail.play().catch(e => console.log('音效未載入'));

        uiNum1.className = 'num-box wrong';
        uiNum2.className = 'num-box wrong';

        gameTimeout = setTimeout(() => {
            uiMessageBox.className = 'animate__animated animate__fadeOutDown';
            gameTimeout = setTimeout(() => {
                resetGame(false);
            }, 700);
        }, 2300);
    }
}

btnPause.addEventListener('click', () => {
    if (isPlaying) {
        isPlaying = false;
        clearInterval(timerInterval);
        btnPause.innerText = '繼續遊戲 / Continue';
    } else {
        isPlaying = true;
        // 只有在已經開始掃描的情況下，按下繼續才會恢復倒數
        if (hasStartedScanning) {
            startTimer();
        }
        btnPause.innerText = '暫停遊戲 / Pause';
    }
});

btnResetTime.addEventListener('click', () => resetGame(false));
btnResetNext.addEventListener('click', () => resetGame(true));

async function startNFC() {
    try {
        if ('NDEFReader' in window) {
            ndefReader = new NDEFReader();
            await ndefReader.scan();
            ndefReader.onreading = event => {
                const decoder = new TextDecoder();
                for (const record of event.message.records) {
                    if (record.recordType === 'text') {
                        handleNumberInput(decoder.decode(record.data));
                    }
                }
            };
        } else {
            console.log('此設備不支援 Web NFC，請使用鍵盤測試。');
        }
    } catch (error) {
        console.error('NFC 錯誤:', error);
    }
}

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    adminControls.style.display = 'block';
    startNFC();
    resetGame(true);
});

document.addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9') {
        handleNumberInput(e.key);
    }
});