/* --- 
  儲存所有章節內容的地方
--- */
const chapterData = {
    // --- 第一章的 HTML 內容與邏輯 ---
    "1": {
        html: `
            <h1 class="chapter-title">第一章：波動 (Traveling Wave)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式</h2>
                <h3>Symbols</h3>
                <div class="ctr">
                    <div>\\(A\\) amplitude (振幅)</div>
                    <div>\\(T = \\frac{1}{f} \\) period (週期, in seconds)</div>
                    <div>\\(f = \\frac{1}{T} \\) frequency (頻率, in Hertz)</div>
                    <div>\\(v \\) propagation velocity (傳播速度, in m/s)</div>
                    <div>\\(\\lambda \\) wavelength (波長, in meters)</div>
                    <div>\\(k \\) wave number (波數)</div>
                    <div>\\(\\omega \\) angular frequency (角頻率)</div>
                </div>
                <h3>Formulas</h3>
                <p>行進波的通用公式：</p>
                $$ y(x,t)=A \\sin \\Big[ \\frac{2\\pi}{\\lambda} (x \\pm v t) \\Big] $$
                <p>透過變數代換：</p>
                $$\\begin{align*}
                k &= \\frac{2\\pi}{\\lambda} \\\\
                \\omega &= 2\\pi f = \\frac{2\\pi}{T}
                \\end{align*}$$
                <p>我們可以將公式轉換為更簡潔的形式：</p>
                $$ y(x,t) = A \\sin(kx \\pm \\omega t) $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：波動基礎</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/ntxUHuC1Wmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter1-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 「波數」(Wave Number) \\(k\\) 的定義是什麼？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) \\(k = 2\\pi \\lambda\\)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) \\(k = \\frac{2\\pi}{\\lambda}\\)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) \\(k = \\frac{\\lambda}{2\\pi}\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 「角頻率」(Angular Frequency) \\(\\omega\\) 的正確公式是什麼？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\omega = 2\\pi f\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(\\omega = \\frac{2\\pi}{f}\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\omega = \\frac{f}{2\\pi}\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 公式 \\(y(x,t) = A \\sin(kx - \\omega t)\\) 描述的波是往哪個方向傳播？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 正 x 方向</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 負 x 方向</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-1">提交答案</button>
                    <p id="quiz-result-1" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-1">
                    <div class="flashcard" id="flashcard-1"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-1"></div>
                        <div class="card-face card-back" id="flashcard-back-1"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-1">上一張</button>
                        <button id="next-card-1">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-1');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-1');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'B') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'A') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "\\(k\\)", back: "Wave Number (波數)<br> $$\\large k = \\frac{2\\pi}{\\lambda}$$" },
                { front: "\\(\\omega\\)", back: "Angular Frequency (角頻率)<br> $$\\large \\omega = 2\\pi f$$" },
                { front: "\\(A\\)", back: "Amplitude (振幅)" },
                { front: "\\(T\\)", back: "Period (週期)<br> $$\\large T = 1/f$$" },
                { front: "\\(f\\)", back: "Frequency (頻率)<br> $$\\large f = 1/T$$" }
            ];
            initFlashcards('1', flashcards);
        }
    },
    
    // --- 第二章的 HTML 內容與邏輯 ---
    "2": {
        html: `
            <h1 class="chapter-title">第二章：能量與動量 (Energy & Momentum)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式</h2>
                <h3>Symbols</h3>
                <div class="ctr">
                    <div>\\(u_E\\) 電場能量密度</div>
                    <div>\\(u_B\\) 磁場能量密度</div>
                    <div>\\(\\vec{S}\\) 坡印廷向量 (Poynting Vector)</div>
                    <div>\\(I\\) 光強度 (Intensity)</div>
                    <div>\\(p\\) 動量 (Momentum)</div>
                    <div>\\(P_{rad}\\) 光壓 (Radiation Pressure)</div>
                </div>
                <h3>Formulas</h3>
                <p>電磁波的總能量密度 \\(u\\) 是電場與磁場能量密度的總和：</p>
                $$ u = u_E + u_B = \\frac{1}{2}\\epsilon_0 E^2 + \\frac{1}{2\\mu_0}B^2 $$
                <p>坡印廷向量 \\(\\vec{S}\\) 描述了能量流的方向與大小（單位面積的功率）：</p>
                $$ \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}) $$
                <p>光強度 \\(I\\) 是坡印廷向量大小的時間平均值：</p>
                $$ I = \\langle S \\rangle = \\frac{1}{2}c\\epsilon_0 E_{max}^2 $$
                <p>光壓 \\(P_{rad}\\) (完美吸收表面)：</p>
                $$ P_{rad} = \\frac{I}{c} $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：坡印廷向量 (Poynting Vector)</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Hd29jEaGERk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter2-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 哪一個物理量描述了電磁波的「能量流動方向」與「單位面積的功率」？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 坡印廷向量 \\(\\vec{S}\\)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 電場能量密度 \\(u_E\\)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 光強度 \\(I\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 坡印廷向量 \\(\\vec{S}\\) 的正確定義是什麼？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(\\vec{S} = \\mu_0 (\\vec{E} \\times \\vec{B})\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\vec{S} = \\frac{1}{\\epsilon_0} (\\vec{E} \\cdot \\vec{B})\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 光強度 \\(I\\) 被定義為坡印廷向量大小的...</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 瞬間最大值</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 時間平均值</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 空間最小值</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-2">提交答案</button>
                    <p id="quiz-result-2" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-2">
                    <div class="flashcard" id="flashcard-2"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-2"></div>
                        <div class="card-face card-back" id="flashcard-back-2"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-2">上一張</button>
                        <button id="next-card-2">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-2');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-2');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'B') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "\\(\\vec{S}\\)", back: "坡印廷向量 (Poynting Vector)<br> 描述能量流" },
                { front: "\\(\\vec{S} = ?\\)", back: "$$\\large \\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B})$$" },
                { front: "\\(I\\)", back: "光強度 (Intensity)<br> \\(I = \\langle S \\rangle\\)" },
                { front: "\\(u_E\\)", back: "電場能量密度<br> $$\\large u_E = \\frac{1}{2}\\epsilon_0 E^2$$" },
                { front: "\\(P_{rad}\\) (吸收)", back: "光壓 (Radiation Pressure)<br> $$\\large P_{rad} = \\frac{I}{c}$$" }
            ];
            initFlashcards('2', flashcards);
        }
    },
    
    // --- 第三章的 HTML 內容與邏輯 ---
    "3": {
        html: `
            <h1 class="chapter-title">第三章：電磁波 (Maxwell's Equations)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：馬克士威方程式</h2>
                <p>馬克士威方程式是四條統整電磁學的基礎方程式。在真空中（沒有電荷 \\(\\rho\\) 和電流 \\(\\vec{J}\\)），它們的形式如下：</p>
                <p><strong>1. 高斯定律 (Gauss's Law):</strong></p>
                $$ \\nabla \cdot \\vec{E} = 0 $$
                <p><strong>2. 磁高斯定律 (Gauss's Law for Magnetism):</strong></p>
                $$ \\nabla \cdot \\vec{B} = 0 $$
                <p><strong>3. 法拉第定律 (Faraday's Law):</strong></p>
                $$ \\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t} $$
                <p><strong>4. 安培-馬克士威定律 (Ampère-Maxwell Law):</strong></p>
                $$ \\nabla \\times \\vec{B} = \\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t} $$
                <p style="margin-top: 20px;">第 4 條中的 \\(\\mu_0 \\epsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}\\) 項稱為「位移電流」，這是馬克士威的關鍵補充，它預測了變動的電場可以產生磁場。</p>
                <p>從這些方程式可以推導出電磁波的波動方程式：</p>
                $$ \\nabla^2 \\vec{E} = \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} $$
                <p>並預測了波速 \\(c\\)，其值等於光速：</p>
                $$ c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} $$
            </section>
            <section class="learning-module">
                <h2>🖥️ 教學影片：什麼是電磁波？</h2>
                <p>本影片 (Physics Made Easy) 清楚地解釋了振盪的電荷如何產生電磁波。</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/hk63uUhkZH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter3-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 馬克士威在哪一條定律中加入了「位移電流」項，從而預測了電磁波的存在？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 高斯定律</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 法拉第定律</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 安培定律 (安培-馬克士威定律)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 根據馬克士威方程式，光在真空中的速度 \\(c\\) 等於？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(\\sqrt{\\mu_0 \\epsilon_0}\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(1 / \\sqrt{\\mu_0 \\epsilon_0}\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(\\mu_0 / \\epsilon_0\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 法拉第定律 (\\(\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}\\)) 描述了什麼現象？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 變動的磁場會產生電場</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 變動的電場會產生磁場</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 磁場沒有磁單極</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-3">提交答案</button>
                    <p id="quiz-result-3" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-3">
                    <div class="flashcard" id="flashcard-3"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-3"></div>
                        <div class="card-face card-back" id="flashcard-back-3"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-3">上一張</button>
                        <button id="next-card-3">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-3');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-3');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'C') score++;
                    if (answers.q2 && answers.q2.value === 'B') score++;
                    if (answers.q3 && answers.q3.value === 'A') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "馬克士威方程式", back: "統整電磁學的四條方程式，<br>預測了光是電磁波。" },
                { front: "位移電流", back: "變動的電場等效於電流，<br>也能產生磁場。" },
                { front: "法拉第定律", back: "變動的磁場<br>會產生電場。" },
                { front: "真空中的光速 \\(c\\)", back: "$$\\large c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}}$$" }
            ];
            initFlashcards('3', flashcards);
        }
    },
    
    // --- 第四章的 HTML 內容與邏輯 ---
    "4": {
        html: `
            <h1 class="chapter-title">第四章：波的疊加 (Superposition)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：疊加與干涉</h2>
                
                <p><strong>1. 疊加原理 (Superposition Principle):</strong></p>
                <p>當兩個（或多個）波在空間中相遇時，總波函數 \\(\\psi\\) 是各個獨立波函數 \\(\\psi_1, \\psi_2, ...\\) 的向量和。</p>
                $$ \\psi = \\psi_1 + \\psi_2 + ... $$

                <p style="margin-top: 20px;"><strong>2. 干涉 (Interference):</strong></p>
                <p>當兩個同調光源（相同頻率、恆定相位差）發生疊加時，會產生干涉現象。</p>
                
                <p><strong>建設性干涉 (Constructive):</strong> (波峰遇波峰)</p>
                <p>相位差為 \\(2\\pi\\) 的整數倍 (\\(0, 2\\pi, 4\\pi, ...\\))。</p>
                
                <p><strong>破壞性干涉 (Destructive):</strong> (波峰遇波谷)</p>
                <p>相位差為 \\(\\pi\\) 的奇數倍 (\\(\pi, 3\\pi, 5\\pi, ...\\))。</p>

                <p style="margin-top: 20px;"><strong>3. 楊氏雙狹縫 (Young's Double Slit):</strong></p>
                <p>對於狹縫間距為 \\(d\\)，光程差 \\(\\Delta L = d \\sin \\theta\\)。</p>
                
                <p><strong>亮紋 (建設性) 條件:</strong></p>
                $$ d \\sin \\theta = m \\lambda \\quad (m = 0, \\pm 1, \\pm 2, ...) $$

                <p><strong>暗紋 (破壞性) 條件:</strong></p>
                $$ d \\sin \\theta = (m + \\frac{1}{2}) \\lambda \\quad (m = 0, \\pm 1, \\pm 2, ...) $$
            </section>
            
            <section class="learning-module">
                <h2>🖥️ 教學影片：波的疊加原理</h2>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/I6LplR1GsUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter4-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 當兩個波相遇時，總擾動是各個波擾動的向量和。這個原理稱為什麼？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 疊加原理 (Superposition Principle)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 偏振原理 (Polarization Principle)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 馬克士威原理 (Maxwell's Principle)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 在楊氏雙狹縫實驗中，亮紋（建設性干涉）的條件是什麼？ (\\(d\\) = 狹縫間距, \\(m\\) = 整數)</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(d \\sin \\theta = m \\lambda\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(d \\sin \\theta = (m + \\frac{1}{2}) \\lambda\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) \\(d \\cos \\theta = m \\lambda\\)</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 當兩個波的相位差為 \\(\\pi\\)（或 \\(3\\pi, 5\\pi ...\\)）時，會發生什麼干涉？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) 建設性干涉</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) 破壞性干涉</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 完全不干涉</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-4">提交答案</button>
                    <p id="quiz-result-4" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-4">
                    <div class="flashcard" id="flashcard-4"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-4"></div>
                        <div class="card-face card-back" id="flashcard-back-4"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-4">上一張</button>
                        <button id="next-card-4">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-4');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-4');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'A') score++;
                    if (answers.q3 && answers.q3.value === 'B') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "疊加原理", back: "總波函數是<br>各個波函數的向量和。" },
                { front: "干涉 (Interference)", back: "兩個同調波疊加時<br>產生的現象。" },
                { front: "建設性干涉", back: "波峰遇波峰。<br>相位差為 \\(2m\\pi\\)。" },
                { front: "破壞性干涉", back: "波峰遇波谷。<br>相位差為 \\((2m+1)\\pi\\)。" },
                { front: "雙狹縫亮紋", back: "$$\\large d \\sin \\theta = m \\lambda$$" },
                { front: "雙狹縫暗紋", back: "$$\\large d \\sin \\theta = (m+\\frac{1}{2}) \\lambda$$" }
            ];
            initFlashcards('4', flashcards);
        }
    },
    
    // --- 第五章的 HTML 內容與邏輯 ---
    "5": {
        html: `
            <h1 class="chapter-title">第五章：偏振 (Polarization)</h1>
            <section class="learning-module">
                <h2>🎓 核心公式：偏振與定律</h2>
                
                <p><strong>1. 偏振 (Polarization):</strong></p>
                <p>偏振是**橫波**（例如光波）特有的現象。它描述的是波的振盪方向（對光而言，是電場 \\(\\vec{E}\\) 的振盪方向）被限制在特定平面內。</p>
                <ul style="margin-top: 10px;">
                    <li><strong>線性偏振 (Linear):</strong> 電場在單一固定平面上振盪。</li>
                    <li><strong>非偏振 (Unpolarized):</strong> 電場在所有方向上隨機振盪（例如太陽光）。</li>
                </ul>

                <p style="margin-top: 20px;"><strong>2. 馬呂斯定律 (Malus's Law):</strong></p>
                <p>當一束強度為 \\(I_0\\) 的線性偏振光，通過一個偏振軸與其夾角為 \\(\\theta\\) 的偏振片（檢偏器）時，穿透後的光強度 \\(I\\) 為：</p>
                $$ I = I_0 \\cos^2 \\theta $$
                <p><em>推論：</em> 當非偏振光通過第一個偏振片時，強度會減半 (\\(I = I_0 / 2\\))。</p>

                <p style="margin-top: 20px;"><strong>3. 布魯斯特角 (Brewster's Angle):</strong></p>
                <p>當非偏振光以特定角度 \\(\\theta_B\\)（布魯斯特角）入射到介面（例如空氣到玻璃）時，**反射光**將會是完全偏振的（偏振方向平行於介面）。</p>
                $$ \\tan \\theta_B = \\frac{n_2}{n_1} $$
            </section>
            
            <section class="learning-module">
                <h2>🖥️ 教學影片：光的偏振</h2>
                <p>本影片 (AAPT) 實際展示了偏振片如何運作。</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/FzJBjpqWrw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>📝 隨堂複習</h2>
                <form class="quiz-form" id="chapter5-quiz" onsubmit="return false;">
                    <div class="quiz-question">
                        <p><strong>1. 哪一種類型的波才能顯示出「偏振」現象？</strong></p>
                        <div><input type="radio" id="q1a" name="q1" value="A"><label for="q1a">(A) 橫波 (Transverse waves)</label></div>
                        <div><input type="radio" id="q1b" name="q1" value="B"><label for="q1b">(B) 縱波 (Longitudinal waves)</label></div>
                        <div><input type="radio" id="q1c" name="q1" value="C"><label for="q1c">(C) 兩種都可以</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>2. 一束非偏振光（強度 \\(I_0\\)）通過一個理想偏振片後，強度會變為多少？</strong></p>
                        <div><input type="radio" id="q2a" name="q2" value="A"><label for="q2a">(A) \\(I_0\\)</label></div>
                        <div><input type="radio" id="q2b" name="q2" value="B"><label for="q2b">(B) \\(I_0 / 2\\)</label></div>
                        <div><input type="radio" id="q2c" name="q2" value="C"><label for="q2c">(C) 0</label></div>
                    </div>
                    <div class="quiz-question">
                        <p><strong>3. 根據馬呂斯定律 \\(I = I_0 \\cos^2 \\theta\\)，一束偏振光（強度 \\(I_0\\)）通過一個與其偏振軸夾角 \\(\\theta = 90^\\circ\\) 的檢偏器，透射光強度 \\(I\\) 為何？</strong></p>
                        <div><input type="radio" id="q3a" name="q3" value="A"><label for="q3a">(A) \\(I_0\\) (強度不變)</label></div>
                        <div><input type="radio" id="q3b" name="q3" value="B"><label for="q3b">(B) \\(I_0 / 2\\)</label></div>
                        <div><input type="radio" id="q3c" name="q3" value="C"><label for="q3c">(C) 0 (完全阻擋)</label></div>
                    </div>
                    <button type="submit" id="submit-quiz-5">提交答案</button>
                    <p id="quiz-result-5" style="font-weight: bold; margin-top: 15px;"></p>
                </form>
            </section>
            <section class="learning-module">
                <h2>📇 字卡遊戲</h2>
                <div class="flashcard-container" id="flashcard-container-5">
                    <div class="flashcard" id="flashcard-5"><div class="flashcard-inner">
                        <div class="card-face card-front" id="flashcard-front-5"></div>
                        <div class="card-face card-back" id="flashcard-back-5"></div>
                    </div></div>
                    <div class="flashcard-nav">
                        <button id="prev-card-5">上一張</button>
                        <button id="next-card-5">下一張</button>
                    </div>
                </div>
            </section>
        `,
        initLogic: () => {
            const quizButton = document.getElementById('submit-quiz-5');
            if (quizButton) {
                quizButton.addEventListener('click', () => {
                    const quizResult = document.getElementById('quiz-result-5');
                    const answers = {
                        q1: document.querySelector('input[name="q1"]:checked'),
                        q2: document.querySelector('input[name="q2"]:checked'),
                        q3: document.querySelector('input[name="q3"]:checked')
                    };
                    let score = 0, totalQuestions = 3;
                    if (answers.q1 && answers.q1.value === 'A') score++;
                    if (answers.q2 && answers.q2.value === 'B') score++;
                    if (answers.q3 && answers.q3.value === 'C') score++;
                    quizResult.textContent = `您的得分: ${score} / ${totalQuestions}`;
                    quizResult.style.color = (score === totalQuestions) ? 'green' : 'red';
                });
            }
            const flashcards = [
                { front: "偏振 (Polarization)", back: "光波的電場振盪方向<br>被限制在特定平面的現象。" },
                { front: "馬呂斯定律 (Malus's Law)", back: "描述偏振光通過檢偏器後的強度。<br> $$\\large I = I_0 \\cos^2 \\theta$$" },
                { front: "布魯斯特角 (Brewster's Angle)", back: "反射光為完全偏振時的入射角。<br> $$\\large \\tan\\theta_B = \\frac{n_2}{n_1}$$" },
                { front: "橫波 (Transverse Wave)", back: "波的振盪方向<br>垂直於傳播方向。" }
            ];
            initFlashcards('5', flashcards);
        }
    },
    
    // --- (*** 新增 ***) 附錄的 HTML 內容與邏輯 ---
    "appendix-dichroism": {
        html: `
            <h1 class="chapter-title">附錄：二色向性 (Dichroism)</h1>
            <section class="learning-module">
                <h2>🎓 <strong>二色向性 (Dichroism) 的基本原理</strong></h2>
                <p><strong>二向色性是指某些晶體或物質對於不同偏振方向的光，會表現出選擇性吸收的物理現象。</strong></p>
                <p>簡單來說，當一束非偏振光（含有各種隨機方向的振動電場）通過具有二色性的材料時，會發生以下情況：</p>
                <ol>
                    <li><p><strong>選擇性吸收 (Selective Absorption)</strong>：該材料會強烈吸收某個特定偏振方向的光（我們稱之為<u>吸收軸</u>），而對於與其垂直的偏振方向的光，則幾乎不吸收，讓其順利通過（我們稱之為<u>穿透軸</u>或 <u>偏振軸</u>）。</p></li>
                    <li><p><strong>產生偏振光 (Polarization)</strong>：因此，原本非偏振的光在穿過這種材料後，只剩下與「穿透軸」方向一致的偏振光，其餘方向的偏振光都被吸收掉了。最終，出射的光就變成了線偏振光。</p></li>
                </ol>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SyY7cXjRgg.png" alt="Dichroism diagram 1"></p>
                <p><em>電氣石都是化學成分各不相同的矽酸硼化物</em></p>
                
                <p><strong>形象化比喻：</strong></p>
                <p>您可以將具有二色性的材料想像成一個「柵欄」。</p>
                <ul>
                    <li><strong>非偏振光</strong>：就像一群人從四面八方隨意跑向柵欄。</li>
                    <li><strong>二色性材料（柵欄）</strong>：只有身體側向與柵欄縫隙平行的人（特定偏振方向的光）才能通過。</li>
                    <li><strong>被吸收的光</strong>：身體方向與柵欄垂直的人（其他偏振方向的光）會被擋住。</li>
                    <li><strong>穿透的偏振光</strong>：最終通過柵欄的人群，都只能以同一個方向前進。</li>
                </ul>
                <p>這個現象的物理本質，與材料的分子或晶格結構有關。在這些材料中，其分子排列具有明顯的方向性，使得電子只能在特定方向上有效地與光的電場相互作用並吸收其能量。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rytttQo0ll.png" alt="Dichroism diagram 2"></p>
                <p><strong>Y方向：</strong>電場y分量沿導線長軸驅動傳導電子産生電流。電子和晶格原子碰撞，傳遞能量導線變熱。沿著y軸加速的電子向前向後都輻射電磁波，向前輻射的電磁波與入射波相抵消，從而y分量透過很少或者根本不透過。<br>
                <strong>Z方向：</strong>電子不能移動很遠，z分量不受影響。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>二色向性在偏振片 (Polarizer) 的應用</strong></h2>
                <p>二色性是製造現代最常見的<strong>吸收型偏振片（Absorptive Polarizer）</strong>的核心原理。這種類型的偏振片，也常被稱為「寶麗來（Polaroid）偏振片」，其發明大大降低了偏振光的生產成本，使其得以廣泛應用。</p>
                <p><strong>其結構與運作方式如下：</strong></p>
                <ol>
                    <li><p><strong>材料選擇</strong>：最經典的材料是聚乙烯醇（Polyvinyl Alcohol, PVA）薄膜。</p></li>
                    <li><p><strong>拉伸定向</strong>：首先，將PVA薄膜加熱並沿一個方向強力拉伸。這個過程會使得原本隨機排列的長鏈聚合物分子，沿著拉伸方向整齊排列。</p></li>
                    <li><p><strong>染色（摻雜）</strong>：接著，將拉伸後的薄膜浸泡在富含碘（Iodine）的溶液中。碘分子會附著在整齊排列的PVA長鏈上，形成導電的碘鏈。</p></li>
                    <li><p><strong>形成「吸收軸」</strong>：這些沿著PVA分子鏈排列的碘鏈，就像一根根微小的導線。當入射光的電場方向與這些碘鏈平行時，會驅動碘鏈中的電子產生電流，光的能量因此被吸收並轉化為熱能。這個方向就成了偏振片的<strong>吸收軸</strong>。</p></li>
                    <li><p><strong>形成「穿透軸」</strong>：當入射光的電場方向與碘鏈垂直時，電子無法在短軸方向上有效移動，因此光的能量不會被吸收，光線便能順利穿透。這個方向就是偏振片的<strong>穿透軸</strong>。</p></li>
                </ol>
                <p><strong>結論：</strong></p>
                <p>一片avidin的偏振片，就是利用其內部分子結構的有序排列，創造出一個特定的「吸收軸」。當自然光通過時，與吸收軸平行的電場分量被吸收，而與其垂直的電場分量則被允許通過，從而將非偏振的自然光轉變為線偏振光。</p>
            </section>
            
            <section class="learning-module">
                <h2>相關影片</h2>
                <div class="video-container">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/cNJPzpMJfxI" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=540074514&bvid=BV1vi4y1b7a3&cid=172339009&p=1" frameborder="no" allowfullscreen="true"></iframe>
                </div>
            </section>

            <section class="learning-module">
                <h2><strong>二色性偏振片的應用實例</strong></h2>
                <ul>
                    <li><strong>LCD 顯示器</strong>：液晶顯示器的每個像素前後都各有一片偏振片，通過控制液晶分子的旋轉來決定光的通過或阻擋，從而顯示圖像。</li>
                    <li><strong>太陽眼鏡</strong>：偏光太陽眼鏡可以過濾掉來自水面、路面等水平面的反射眩光（這些眩光主要是水平偏振光），讓視野更清晰舒適。</li>
                    <li><strong>攝影濾鏡</strong>：攝影師使用偏光鏡（CPL鏡）來消除反光、增加色彩飽和度，例如讓天空更藍、植物更翠綠。</li>
                    <li><strong>科學實驗</strong>：在光學實驗室中，用於產生和分析偏振光，研究材料的光学特性。</li>
                </ul>
                <p>總而言之，二色性是將特定方向光線「吸收掉」的原理，而偏振片則是利用此原理製造出來、用以產生線偏振光的關鍵光學元件。</p>
            </section>
        `,
        // --- 附錄沒有測驗或字卡，所以 initLogic 是空的 ---
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    }, "appendix-birefringence": {
        html: `
            <h1 class="chapter-title">8.4 雙折射(birefringence)</h1>
            
            <section class="learning-module">
                <h2>🎓 <strong>什麼是雙折射？</strong></h2>
                <p>一般而言，當單色光從空氣或玻璃(各向同性介質)的界面折射時，只會產生一束折射光，這束光遵守斯涅爾(Snell)折射定律。然而，當單色光在各向異性晶體(如方解石 CaCO₃)的界面折射時，通常會產生兩束折射光。這種現象被稱為雙折射。</p>
                <p>當我們將一塊透明的方解石（Calcite）晶體放在一行文字上時，會觀察到一個奇特的現象：文字會呈現出兩個清晰的影像。這個被稱為<strong>雙折射</strong>(birefringence)現象，是光與晶體交互作用最迷人的展示之一。它揭示了當一束自然光入射到這類晶體時，光線會分裂成兩束獨立的折射光線。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/S17tzEoAle.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HyExJKjCgg.png" alt="image"></p>
                
                <h2>相關影片</h2>
                <div class="video-container">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/wNXusZJAK7s" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </section>

            <section class="learning-module">
                <h2><strong>各向異性 (Anisotropy) 與光軸 (Optical Axis)</strong></h2>
                <p>這種現象的根源在於晶體的<strong>各向異性(Anisotropy)</strong>，意味著晶體的物理性質（例如折射率）會隨著方向不同而改變。一般的玻璃或水是<strong>各向同性(Isotropic)</strong>，光在其中傳播時，所有方向的折射率都相同。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SJZC_u2Cex.jpg" alt="888"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/S1vCP9nRxe.jpg" alt="656"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/ry9WetiAxg.png" alt="image"></p>
                
                <h3><strong>晶體的光軸 (Optical Axis)</strong></h3>
                <p><strong>光軸定義:</strong> 當光在晶體內沿某個特殊方向傳播時不發生雙折射，該方向稱爲晶體的光軸。 (注：光軸是一特殊的方向，凡平行于此方向的直線均爲光軸。)</p>
                <p>根據光軸的數量，晶體可被分為：</p>
                <ul>
                    <li><strong>單軸晶體</strong>： 只有一個光軸的晶體 (如方解石、石英)</li>
                    <li><strong>雙軸晶體</strong>： 有兩個光軸的晶體 (如:雲母)</li>
                </ul>
                <p>由於單軸晶體在光學應用中更為普遍，我們通常討論單軸晶體。</p>
            </section>

            <section class="learning-module">
                <h2><strong>尋常光 (o-ray) 與非尋常光 (e-ray)</strong></h2>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/BkORZYs0xl.png" alt="image"></p>
                <p>這兩束光線被賦予了特定的名稱：<strong>尋常光 o光 (ordinary ray)</strong> 與 <strong>非尋常光 e光 (extra-ordinary ray)</strong>。它們之間存在著根本性的差異：</p>
                <ul>
                    <li><strong>折射行為</strong>：
                        <ul>
                            <li>o光完全遵守我們所熟知的折射定律（司乃耳定律）。</li>
                            <li>e光的行為則更為複雜，通常不遵循折射定律。</li>
                        </ul>
                    </li>
                    <li><strong>偏振狀態</strong>：這兩束分裂出來的光線是高度純淨的線偏振光。</li>
                    <li><strong>振動方向</strong>：o光與e光的偏振振動方向總是相互垂直。
                        <ul>
                            <li>更精確地說，o光的電場向量振動方向垂直於由光軸和o光所構成的主平面；而e光的電場向量則在由光軸和e光構成的主平面內振動。</li>
                        </ul>
                    </li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>主平面 (Principle Plane) 與主截面 (Principle Section)</strong></h2>
                <p>在單軸晶體(uniaxial crystal)的光學研究中，主平面（principle plane)和主截面(principle section)是描述光在晶體內部如何傳播的概念。這些概念主要與光的雙折射現象以及光的偏振有關。</p>
                
                <h3><strong>主平面 (Principle Plane)</strong></h3>
                <p>主平面是包含<strong>光軸 (optical axis) 和光線傳播方向的平面</strong>。</p>
                <ul>
                    <li><strong>o光主平面</strong>: o光光線與晶體光軸組成的面為o光主平面。</li>
                    <li><strong>e光主平面</strong>: e光光線與晶體光軸組成的面為e光主平面。</li>
                    <li>主平面通常用來分析光線在晶體內部的折射行為，特別是在光線傳播時，如何分裂成兩條不同折射率的光線——普通光線(ordinary ray)和非常光線(extraordinary ray)。</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rkACVFs0xe.png" alt="image"></p>

                <h3><strong>主截面 (Principle Section)</strong></h3>
                <ul>
                    <li>主截面是包含<strong>光軸與晶體平面法線 (normal line) 組成</strong>，即主截面是包含光軸的橫截面。</li>
                    <li>這個平面通常用來研究在該方向上光線如何傳播並與晶體的各種物理特性相互作用。</li>
                    <li>光在這個平面內的傳播與光的折射、散射、反射等現象密切相關。</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/BkgUrts0ll.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HJ8yqwNyZe.jpg" alt="99"></p>
                
                <p>當入射光在主截面內時，o光、e光主平面均爲主截面。o光、e光的光向量互相垂直。</p>
                <p>光線入射晶體通常o光和e光主平面是不共面的，一般選取入射面與主截面重合的實用情况討論。</p>
                <p>在單軸晶體中，主截面對理解光線如何進入和穿過晶體，尤其是在不同方向上的折射率如何變化（例如普通折射率和非常折射率之間的差異）具有重要意義。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>單軸晶體的主折射率</strong></h2>
                <p>根據光軸的數量，晶體可被分為單軸晶體（如方解石、石英，具有一個光軸）與雙軸晶體（具有兩個光軸）。由於單軸晶體在光學應用中更為普遍，我們定義了兩個主折射率：</p>
                <ol>
                    <li><strong>尋常光折射率 (nₒ)</strong>: 這是一個恆定的值，對應<strong>o光的折射率，不隨方向改變</strong>。</li>
                    <li><strong>非尋常光折射率 (nₑ)</strong>: 這是一個主折射率值。
                        <ul>
                            <li>e光所實際經歷的有效折射率 nₑ(θ) 是變化的，其值介於 nₑ 和 nₒ 之間，取決於其傳播方向與光軸的夾角 θ。</li>
                            <li>當光垂直於光軸傳播時，e光經歷的折射率為 nₑ；</li>
                            <li>當光平行於光軸傳播時，其經歷的折射率則變為 nₒ。</li>
                        </ul>
                    </li>
                    <li>正是o光與e光在折射率上的差異，以及它們相互垂直的偏振特性，為我們設計功能強大的偏振光學元件提供了物理基礎。</li>
                </ol>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HkvKLO3Alx.jpg" alt="22"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/Sy6ySho0xe.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HkZ4B3jRle.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/S1L_rhjAge.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rJx0SniRlg.png" alt="image"></p>
            </section>
            
            <section class="learning-module">
                <h2><strong>利用雙折射製作偏光元件</strong></h2>
                <p>利用雙折射效應製作偏光片是常見的高效能偏振光學元件設計，主要透過雙折射晶體（如方解石, Calcite）中尋常光（o-ray）和非常光（e-ray）具有不同折射率的特性來分離或移除其中一個偏振分量。</p>
                <p>以下說明幾種利用雙折射原理製作偏光片的主要設計及其原理：</p>

                <h3><strong>1. Glan–Foucault / Glan-Thompson 偏光鏡</strong></h3>
                <p><strong>設計與結構：</strong></p>
                <p>此類偏光鏡由兩塊最高光學級別的方解石棱鏡組成，兩個直角方解石稜柱體如用氣隙間隔則稱為Glan-Foucault偏光鏡。如果是被<strong>膠合</strong> (Cemented)在一起則稱為Glan-Thompson 偏光鏡。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/S1nWglCAgl.png" alt="{28A61CA4-F42E-445A-8C56-C413CA05467D}"></p>
                
                <p><strong>工作原理：</strong></p>
                <ol>
                    <li>入射的非偏振光進入棱鏡，在兩個晶體的介面處分裂。</li>
                    <li>方解石的雙折射特性導致其中一種偏振態（o-ray）被選擇性地反射和吸收，而另一種偏振態（e-ray）則被傳輸。</li>
                    <li>尋常光 (o-ray) 在每個介面被反射，隨後被<strong>散射並部分被棱鏡外殼吸收</strong>。</li>
                    <li>非常光 (e-ray) 則徑直穿過棱鏡，提供偏振輸出。</li>
                </ol>
                
                <p><strong>輸出特性與優缺點：</strong></p>
                <ul>
                    <li>Glan-Thompson 偏光片在保持高消光比（例如 100,000:1）的同時，提供了<strong>最寬的視場角</strong> (Field of View, FOV)，典型值約 40°。相比之下，Glan-Foucault 的視場角約 10°。</li>
                    <li>由於使用了<strong>膠合介面</strong>，其最大光強度受到限制。因此，對於高功率應用，通常建議使用 Glan-Laser 偏光片。</li>
                </ul>

                <h3><strong>2. Glan-Taylor 偏光片 (Glan-Taylor Calcite Polarizers)</strong></h3>
                <p><strong>設計與結構：</strong></p>
                <p>Glan-Taylor 偏光片採用 <strong>Glan-Taylor 設計</strong>，由兩個雙折射晶體（通常是<strong>方解石</strong>）棱鏡組成，棱鏡間設有<strong>氣隙</strong> (Air-Spaced)。棱鏡的介面角 (interface angle) 設定接近<strong>非常光折射率的布魯斯特角</strong> (38°)。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/H1FgZg00ex.png" alt="image"></p>
                
                <p><strong>工作原理：</strong></p>
                <p>此偏光片的作用是移除光束中被反射的尋常偏振分量（o-ray）。</p>
                <ol>
                    <li>當非偏振光射入時，由於方解石的雙折射特性，光束會分離成尋常光 (o-ray) 和非常光 (e-ray)。</li>
                    <li>這些棱鏡的設計使得入射光的<strong>尋常偏振分量</strong> (o-ray) 在內部晶體與氣隙的介面上發生<strong>全內反射</strong> (Total Internal Reflection, TIR)。</li>
                    <li>尋常光（o-ray）被反射後，會從棱鏡側面的<strong>側埠</strong> (side port) 射出。</li>
                    <li><strong>非常偏振分量</strong> (e-ray) 則會<strong>穿過氣隙</strong>，並從輸出面射出。</li>
                </ol>
                
                <p><strong>輸出特性：</strong></p>
                <ul>
                    <li><strong>輸出光束</strong>（穿透的 e-ray）具有<strong>極高的線性偏振純度</strong>，例如消光比 (Extinction Ratio) 可達 100,000:1。</li>
                    <li><strong>反射光束</strong>（側埠射出的 o-ray）則<strong>不是完全偏振</strong>的，因此不應用於要求高純度偏振的應用中。</li>
                    <li>Glan-Taylor 棱鏡通常用於波長範圍 350 nm - 2.3 μm 的雷射光束。</li>
                </ul>

                <p><strong>Glan-Laser 偏光片：</strong></p>
                <p>Glan-Laser 偏光片是 Glan-Taylor 類型的變體，主要由<strong>低散射的天然方解石</strong>製成，並採用高雷射損傷閾值的氣隙設計。它們專為<strong>高功率應用</strong>而設計。!</p>

                <h3><strong>3. Wollaston 棱鏡</strong></h3>
                <p><strong>設計與結構：</strong></p>
                <p>Wollaston 棱鏡是一種<strong>偏振分束器</strong> (Polarizing Beamsplitter)。它由兩塊光軸<strong>彼此正交的棱鏡組成</strong>（例如方解石、石英、α-BBO 等），它們被<strong>膠合</strong>或<strong>光學接觸</strong> (optically contacted) 在一起。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HJwuZeCAxx.png" alt="2635c34d4f7419b71546948884315"></p>
                
                <p><strong>工作原理：</strong></p>
                <ol>
                    <li>Wollaston 棱鏡的設計使其<strong>穿透兩個正交偏振分量</strong>，而不是僅移除一個分量。</li>
                    <li>由於雙折射，當非偏振光（通常是垂直入射）射入時，它在棱鏡內部的介面處，尋常光 (o-ray) 會變成非常光 (e-ray)，反之亦然。</li>
                    <li>這種光軸的轉變導致兩個正交偏振態在離開棱鏡時，<strong>以不同的角度射出</strong>。</li>
                </ol>
                
                <p><strong>輸出特性：</strong></p>
                <ul>
                    <li>它將非偏振入射光分成<strong>兩個正交偏振的輸出光束</strong>。</li>
                    <li>兩個輸出光束之間的<strong>分離角</strong> (Separation Angle) 可以很小（如 1° 或 1° 20'）或很大（如 20°）。此分離角取決於棱鏡的楔角和波長。</li>
                    <li>Wollaston 棱鏡的兩個輸出光束均具有<strong>高偏振純度</strong>，例如方解石、α-BBO 和 YVO₄ 棱鏡的消光比可達 100,000:1。</li>
                </ul>

                <h3><strong>4. Nicol 棱鏡</strong></h3>
                <p>Nicol 棱鏡是早期著名的雙折射偏光片。</p>
                <p><strong>設計與原理：</strong></p>
                <p>它由一塊方解石菱面體斜切後，用<strong>加拿大樹膠</strong> (Canada balsam, 折射率約 1.55) 膠合而成。其原理是利用尋常光 (o-ray) 在方解石-樹膠介面處發生<strong>全內反射</strong>並被吸收，而非常光 (e-ray) 則穿透介面射出。由於它的入射角範圍較窄，且出射光有側向位移，它已被 Glan-Taylor 等更有效的偏光片取代。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/B1EDzOVJ-g.png" alt="image"></p>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-scattering": {
        html: `
            <h1 class="chapter-title">8.5 散射與偏振 (Scattering and Polarization)</h1>
            
            <section class="learning-module">
                <h2><strong>8.5.1 現象定義：光的散射使天空偏振</strong></h2>
                <ul>
                    <li><strong>定義</strong>：當太陽光穿過大氣層時，空氣分子會使來自太陽的光向各方向散射，其中藍光（高頻成分）散射最強，使天空呈現藍色，且部分天空光具有偏振性。</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/By-Yt_EJbx.png" alt="image"></p>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.5.2 原理說明</strong></h2>
                <ul>
                    <li><strong>散射偏振原理</strong>：
                        <ul>
                            <li>若線性偏振的光波入射至空氣分子，分子因感受到垂直於入射方向的電場而振動並產生輻射，僅在垂直於振動軸的方向有輻射。</li>
                            <li>若入射光為非偏振，則可視為由兩個正交、非相干的狀態組成，散射後的光在前向完全非偏振，而越偏離原軸則偏振度越高。</li>
                            <li>在觀察方向與初始入射光垂直時，散射光將是完全線性偏振。</li>
                        </ul>
                    </li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HkYoKuEyWg.png" alt="image"></p>
                <div class="video-container">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/TP5JOfrPguQ" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div class="video-container" style="margin-top: 15px;">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/IEbUNZXiPY8?start=496" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.5.3 公式整理</strong></h2>
                <ul>
                    <li><strong>偏振光散射公式與示意</strong>：
                        <ul>
                            <li>偏振方向依循偶極輻射模式（散射光的電場、波向量、偶極方向共面）。</li>
                            <li>由斯涅耳定律與布魯斯特定律可推得偏振角公式：
                                <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="0" style="font-size: 100%; position: relative;">
                                    <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                        <mjx-mi class="mjx-n"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-mi class="mjx-i" space="2"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi>
                                        <mjx-mi class_mjx-n space="1"><mjx-c class="mjx-c70"></mjx-c></mjx-mi>
                                        <mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                        <mjx-mfrac space="2"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                    </mjx-math>
                                    <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>tan</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>θ</mi><mi>p</mi><mo>=</mo><mfrac><msub><mi>n</mi><mi>t</mi></msub><msub><mi>n</mi><mi>i</mi></msub></mfrac></math></mjx-assistive-mml>
                                </mjx-container>
                              其中$\theta ~p~$為偏振角，n~i~是入射介質的折射率，n~t~是透射介質的折射率。
                            </li>
                            <li>於玻璃n~t~ = 1.5時偏振角約為 56^o^</li>
                            <li>照射於水面n~t~ = 1.33時偏振角約為 53^o^。</li>
                        </ul>
                    </li>
                    <li><strong>反射光反偏振公式（來自 Fresnel 方程）</strong>：
                        <ul>
                            <li>垂直入射面的分量反射率：
                                <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="1" style="font-size: 100%; position: relative;">
                                    <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                        <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c22A5"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                        <mjx-msup space="3"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                                        <mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-n"><mjx-c class="mjx-c73"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mi class="mjx-n"><mjx-c class="mjx-c73"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup>
                                    </mjx-math>
                                    <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo>⊥</mo></mrow></msub><mo>=</mo><msup><mrow><mo>(</mo><mfrac><mrow><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo></mrow><mrow><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>n</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo></mrow></mfrac><mo>)</mo></mrow><mn>2</mn></msup></math></mjx-assistive-mml>
                                </mjx-container>
                            </li>
                            <li>平行入射面的分量反射率：
                                <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="2" style="font-size: 100%; position: relative;">
                                    <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                        <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c2225"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                        <mjx-msup space="3"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                                        <mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-n"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mi class="mjx-n"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup>
                                    </mjx-math>
                                    <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo_{\parallel}</mo></mrow></msub><mo>=</mo><msup><mrow><mo>(</mo><mfrac><mrow><mi>tan</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo></mrow><mrow><mi>tan</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>n</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo></mrow></mfrac><mo>)</mo></mrow><mn>2</mn></msup></math></mjx-assistive-mml>
                                </mjx-container>
                            </li>
                            <li>自然光總反射率（等幅正交成分）：
                                <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="3" style="font-size: 100%; position: relative;">
                                    <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                        <mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                        <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                                        <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c2225"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c22A5"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                    </mjx-math>
                                    <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo_{\parallel}</mo></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo>⊥</mo></mrow></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                                </mjx-container>
                            </li>
                        </ul>
                    </li>
                    <li><strong>偏振度定義</strong>：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="4" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c56 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>V</mi><mo>=</mo><mfrac><msub><mi>I</mi><mi>p</mi></msub><mrow><msub><mi>I</mi><mi>p</mi></msub><mo>+</mo><msub><mi>I</mi><mi>n</mi></msub></mrow></mfrac></math></mjx-assistive-mml>
                        </mjx-container>
                        其中 $I_p$ 為偏振光強度，$I_n$ 為非偏振光強度；或，
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="5" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c56 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>max</mi></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>min</mi></mrow></msub>
                                </mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>max</mi></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>min</mi></mrow></msub>
                                </mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>V</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>max</mi></mrow></msub><mo>−</mo><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>min</mi></mrow></msub></mrow><mrow><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>max</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>min</mi></mrow></msub></mrow></mfrac></math></mjx-assistive-mml>
                        </mjx-container>
                        以分析儀旋轉取波最大、最小強度計算。
                    </li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.5.4 分類表格</strong></h2>
                <style>
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th>實例</th>
                            <th>顆粒相對波長</th>
                            <th>散射特性</th>
                            <th>觀察顏色/效果</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>空氣分子（藍天）</td>
                            <td>明顯小於波長</td>
                            <td>強烈偏藍</td>
                            <td>天空藍色、部分偏振光</td>
                        </tr>
                        <tr>
                            <td>細懸煙或霧（一氧化碳細粒子）</td>
                            <td>小於波長</td>
                            <td>偏藍</td>
                            <td>藍色色煙</td>
                        </tr>
                        <tr>
                            <td>大水滴、紙、雲</td>
                            <td>大於波長</td>
                            <td>白色</td>
                            <td>反射多次，光混合成白色</td>
                        </tr>
                        <tr>
                            <td>火山灰散佈</td>
                            <td>近似或略大於波長</td>
                            <td>色彩多變</td>
                            <td>可致色彩強烈日落現象</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.5.5 現象解釋</strong></h2>
                
                <h3><strong>(一) 天空偏振現象</strong></h3>
                <ul>
                    <li><strong>定義</strong>：太陽光在大氣中散射後，除前向光外其他方向出現偏振現象。</li>
                    <li><strong>原理</strong>：偶極輻射模式下，垂直於入射光方向可產生偏振散射，偏振度隨觀察 ángulos 增大而增強。</li>
                    <li><strong>公式</strong>：偏振角 $\tan \theta~p~ = n_t/n_i$，最大偏振發生於入射角等於偏振角時。</li>
                    <li><strong>應用範例</strong>：用偏光片檢查天空、拍攝極化日落照片、防止鏡面反射眩光。</li>
                </ul>
                
                <h3><strong>(二) 粒子大小對散射顏色與偏振的影響</strong></h3>
                <ul>
                    <li><strong>定義</strong>：粒子大小影響散射光的色彩與偏振特性。</li>
                    <li><strong>原理</strong>：Rayleigh 散射適用於粒子小於波長，偏向高頻（藍）散射較強；大於波長則反射和折射多次，光混合呈白色。</li>
                    <li><strong>公式</strong>：不需專用公式，主要比對粒子尺寸與波長關係。</li>
                    <li><strong>應用範例</strong>：煙霧呈藍色，雲/霧/紙/鹽糖等呈白色。</li>
                </ul>
                
                <h3><strong>(三) 多重散射與去偏振現象</strong></h3>
                <ul>
                    <li><strong>定義</strong>：經多層物質（如蠟紙）多次散射後，偏振度降低。</li>
                    <li><strong>原理</strong>：各振盪子受到非相關電場的超疊，導致發射近乎完全去偏振。</li>
                    <li><strong>公式</strong>：偏振度 V 值弱化，「V=0」為完全未偏振，「V=1」為全偏振。</li>
                    <li><strong>應用範例</strong>：蠟紙疊放於交叉偏振片間，光幾乎完全去偏振。</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.5.6 應用範例</strong></h2>
                <ul>
                    <li>用偏光片觀察天空，不同角度可驗證偏振現象。</li>
                    <li>把蠟紙置於交叉偏振片間看去偏振效果。</li>
                    <li>玻璃、池水表面根據入射角產生「布魯斯特偏振角」現象，用於去除眩光或製作各波段極化元件。</li>
                    <li>火山爆發、高空灰塵對大氣色彩偏振造成巨大影響。</li>
                </ul>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-reflection": {
        html: `
            <h1 class="chapter-title">8.6 反射產生的偏振(Polarization by Reflection)</h1>
            
            <section class="learning-module">
                <h2><strong>一、現象定義</strong></h2>
                <p>反射偏振是指未偏振或部分偏振的光投射到介質表面時，反射光和透射光會呈現不同的偏振狀態。最常見於窗戶、紙張、水面等介質，以及多種日常「眩光」現象。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>二、物理原理</strong></h2>
                <ul>
                    <li>當光入射至介電體介面（如空氣-玻璃、水面），部分光會反射且發生偏振作用。</li>
                    <li>當入射角等於特定的「偏振角」（Brewster’s Angle）時，反射光完全呈現偏振狀態（電場向表面方向），而透射光則部分偏振。</li>
                    <li>偏振角由幾何關係決定：入射波和折射波夾角為90°時，反射光消失，只剩垂直於入射面分量。</li>
                    <li>早在1808年Étienne Malus實驗觀察太陽在水面、窗戶上的反射像時發現此現象，後由Brewster實驗量測到數值關係。</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rkSTlYEJ-e.png" alt="image"></p>
                <p><strong>圖8.38的意義是說明「光在介質表面反射和折射時的偏振現象，以及 Brewster角如何決定反射光是否完全偏振」。</strong></p>
                <ul>
                    <li><strong>幾何與波動結構（a）</strong><br>
                    展現光波（入射光）撞擊介質（如玻璃、空氣、海水）介面，部分進入介質（折射），部分反射。</li>
                    <li><strong>電子振盪器模型（b）</strong><br>
                    突顯界面上電子受到入射光影響開始振盪，電子振盪方向對反射光的偏振性產生決定作用。<br>
                    顯示只有垂直於入射面（即平行於界面）的電場分量能成為完全偏振反射光，這正好發生在 Brewster角。</li>
                    <li><strong>極化與輻射模式（c）</strong><br>
                    當光以 Brewster角入射，反射光只剩下垂直於入射面（平行於介面）那一分量（完全偏振），其餘分量被介 質吸收或折射走。</li>
                    <li><strong>光學現象總結（d）</strong><br>
                    兼論在 Brewster角時，反射光呈現強偏振，折射光則偏振度降低，呈現部分偏振。<br>
                    實驗上常用於消除水面眩光、判定偏光器方向等。</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.6.1 費涅耳方程式的應用（Fresnel Equations）</strong></h2>
                
                <h3><strong>一、主題定義</strong></h3>
                <p>本節說明入射電磁波經由介質界面反射與透射時的<strong>偏振現象</strong>，特別聚焦於用「費涅耳方程式」計算不同偏振方向下的反射率與透射率，以及未偏振光在介質界面的能量分布。</p>
                
                <h3><strong>二、物理原理</strong></h3>
                <ul>
                    <li><strong>費涅耳方程式</strong>描述了入射波（平行與垂直偏振）在界面上的反射和透射幅值。</li>
                    <li>若<strong>入射電場平行於入射面</strong>，反射幅比為 $r_\\parallel$，垂直則為 $r_\\perp$，反射率分別為 $R_\\parallel$ 和 $R_\\perp$。</li>
                    <li>反射率公式：
                        <ul>
                            <li>平行偏振：
                                <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="0" style="font-size: 100%; position: relative;">
                                    <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                        <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c2225"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                        <mjx-mi class="mjx-n" space="3"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-msup><mjx-mi class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mi><mjx-script style="vertical-align: 0.403em;"></mjx-script></mjx-msup>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                        <mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom>
                                        <mjx-mi class="mjx-n"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-msup><mjx-mi class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mi><mjx-script style="vertical-align: 0.403em;"></mjx-script></mjx-msup>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                    </mjx-math>
                                    <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo_{\parallel}</mo></mrow></msub><mo>=</mo><msup><mi>tan</mi><mn>2</mn></msup><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><msup><mi>tan</mi><mn>2</mn></msup><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                                </mjx-container>
                            </li>
                            <li>垂直偏振：
                                <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="1" style="font-size: 100%; position: relative;">
                                    <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                        <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c22A5"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                        <mjx-mi class="mjx-n" space="3"><mjx-c class="mjx-c73"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-msup><mjx-mi class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mi><mjx-script style="vertical-align: 0.403em;"></mjx-script></mjx-msup>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                        <mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom>
                                        <mjx-mi class="mjx-n"><mjx-c class="mjx-c73"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                        <mjx-msup><mjx-mi class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mi><mjx-script style="vertical-align: 0.403em;"></mjx-script></mjx-msup>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                        <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                        <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                    </mjx-math>
                                    <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo>⊥</mo></mrow></msub><mo>=</mo><msup><mi>sin</mi><mn>2</mn></msup><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>−</mo><msub><mi>θ</mi><mi>t</mi></msub><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><msup><mi>sin</mi><mn>2</mn></msup><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>t</mi></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                                </mjx-container>
                            </li>
                        </ul>
                    </li>
                    <li>只有垂直分量的反射率永遠不為零；平行分量在<strong>偏振角</strong>(Brewster angle)時反射率歸零。</li>
                    <li>對未偏振入射光，總反射率為：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="2" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c2225"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c52 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c22A5"></mjx-c></mjx-mo></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo_{\parallel}</mo></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow data-mjx-texclass="ORD"><mo>⊥</mo></mrow></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li>偏振角（或Brewster角）定義為 
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="3" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D703 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-msup space="3"><mjx-mn class="mjx-n"><mjx-c class="mjx-c39"></mjx-c><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.403em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c2218"></mjx-c></mjx-mo></mjx-script></mjx-msup>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><msub><mi>θ</mi><mi>t</mi></msub><mo>=</mo><msup><mn>90</mn><mo>∘</mo></msup></math></mjx-assistive-mml>
                        </mjx-container>
                        ，此時平行分量全被折射，反射光完全偏振。
                    </li>
                </ul>
                <hr>
                <p><strong>實例計算</strong></p>
                <ul>
                    <li>例題：200 W/m² 自然光垂直於玻璃表面入射於偏振角，界面總透射率 92.5%，求反射偏振光能量。</li>
                    <li>平行分量全被折射，垂直分量仍有 15% 被反射。</li>
                    <li>總反射率：7.5%，故反射功率=15 W/m²。</li>
                    <li>凸顯自然界大多界面反射光都帶部分偏振。</li>
                </ul>
                <hr>
            </section>
            
            <section class="learning-module">
                <h2><strong>四、偏振度公式</strong></h2>
                <ul>
                    <li><strong>偏振度</strong> $V$ 是偏振光能量佔總能量的比例：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="4" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c56 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45D TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>V</mi><mo>=</mo><mfrac><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>p</mi></mrow></msub><mrow><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>p</</em>></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>n</mi></mrow></msub></mrow></mfrac></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li>或
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="5" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c56 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mtext size="s"><mjx-c class="mjx-c6D"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c78"></mjx-c></mjx-mtext></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mtext size="s"><mjx-c class="mjx-c6D"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mtext></mjx-script></mjx-msub>
                                </mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mtext size="s"><mjx-c class="mjx-c6D"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c78"></mjx-c></mjx-mtext></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mtext size="s"><mjx-c class="mjx-c6D"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mtext></mjx-script></mjx-msub>
                                </mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>V</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>max</mi></msg><mo>−</mo><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>min</mi></mrow></msub></mrow><mrow><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>max</mi></mrow></msub><mo>+</mo><msub><mi>I</mi><mrow data-mjx-texclass="ORD"><mi>min</mi></mrow></msub></mrow></mfrac></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>五、重要現象解釋</strong></h2>
                <ul>
                    <li><strong>反射偏振現象</strong>：在Brewster角入射時，反射光完全偏振，且方向平行於介面；未偏振光會因介面產生部分偏振。</li>
                    <li><strong>生活應用</strong>：偏光鏡及疊板型偏光器原理，消除水面或玻璃表面眩光、攝影或光學檢測均有用途。</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>六、圖示輔助</strong></h2>
                <p><strong>圖8.39 疊板型偏光器（pile-of-plates polarizer）</strong></p>
                <ul>
                    <li>這是 Dominique F. J. Arago 在1812年發明的偏光器構造，通常由多層玻璃片、銀氯片或石英片疊合而成。 利用每一層玻璃片在特定入射角（接近 Brewster角）時，反射出完全偏振光，並讓部分光穿透形成部分偏振透射光。疊板型偏光器可以有效將未偏振光分離，反射出平行界面的偏振分量，疊加多層後提高偏振效果。</li>
                    <li><strong>應用</strong>：可自製簡易偏光器（疊合顯微鏡載玻片），並用於可見光、紅外或紫外波段的偏光應用與教學。</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/BJCoVYNkWl.png" alt="image"></p>
                <hr>
                <p><strong>圖8.40 分光方塊型偏光器（beamsplitter cube polarizer）</strong></p>
                <ul>
                    <li>這類偏光器結構是將兩個稜鏡合成，對角面鍍有多層透明介質薄膜。入射未偏振光撞擊方塊對角面時，利用多層膜的反射與透射特性，分離出互相垂直的兩個偏振分量：一束被反射、一束被透射，各自呈線性偏振且偏振方向相差90°。適用於雷射分光、高能量雷射應用，具備高損傷閾值與低波前失真。</li>
                    <li><strong>應用</strong>：常用於雷射設備、光束分離器、高精度偏振控制裝</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SyoxHFV1Zl.png" alt="image"></p>
                <hr>
                <p><strong>圖 8.41展現反射率隨入射角變化，Brewster角時總反射率最低。</strong></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/S1rqXYEyWg.png" alt="image"></p>
                <hr>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-retarders": {
        html: `
            <h1 class="chapter-title">8.7 遲滯器 (Retarders)</h1>
            
            <section class="learning-module">
                <h2><strong>8.7.1 遲滯器概述與基本原理</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <p>遲滯器(或稱 波片 補波片)是一類光學元件，<strong>用於改變入射波的偏振狀態</strong>。在原理上，遲滯器的運作相當簡單：使兩個相干的偏振態分量之一的相位滯後於另一個預定的量。</p>
                
                <h3><strong>原理</strong></h3>
                <ul>
                    <li>雙折射現象是波片產生相位延遲效果的物理基礎。當偏振光進入具有雙折射特性的晶體（如石英、方解石）時，光會分裂為兩束正交偏振分量：尋常光（o光）和非尋常光（e光）。這兩束光在晶體中的折射率不同，因此它們的傳播速度也不同。</li>
                    <li>由於這個速度差異，o光和e光從波片出射時會產生路徑差，進而造成相位延遲。這個相位差δ的大小取決於材料的折射率差(n~o~和n~e~)、波片的厚度d以及入射光的波長λ。</li>
                    <li>當光波從遲滯器出射時，<strong>兩個分量的相對相位與初始狀態不同，因此偏振狀態也隨之改變</strong>。遲滯器實際上是一個「相對相位移位器」，它使兩個正交電場分量之一的相位前進或滯後某個所需的量。</li>
                </ul>
                <hr>
                
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/ByV6tYVybg.png" alt="image"></p>
                <p><strong>圖8.42展示的是當Ex相對於Ey領先或滯後不同相位時，波的偏振狀態的循環變化。</strong></p>
                
                <h4><strong>（1）各種偏振狀態的關係</strong></h4>
                <ul>
                    <li>Ex領先或是滯後Ey相位量時，對應不同的偏振狀態。(內圈是領先、外圈是滯後的數值)</li>
                    <li>圖中呈現各種主要偏振態（線偏振、左旋圓偏振、右旋圓偏振、橢圓偏振）以及其相位差標記（如0、$\frac{\pi}{4}$、$\frac{\pi}{2}$、$\pi$、$\frac{5\pi}{4}$、$2\pi$等）。</li>
                    <li>相位差（Retardance）：$\delta = \Delta\omega = \text{Ex 領先 Ey 的相位}$</li>
                </ul>
                
                <h4><strong>（2）相位延遲的循環性</strong></h4>
                <ul>
                    <li>這個序列是<strong>無窮循環的</strong>：每引入$\frac{\pi}{4}$相位延遲，偏振狀態就順時針變化一格；逆時針移動則是每次減少$\frac{\pi}{4}$。八次變化（$8 \times \frac{\pi}{4} = 2\pi$）回到原狀。</li>
                    <li><strong>實際意義</strong>：每個偏振狀態都可以透過特定相位延遲轉換到下一個狀態，波片或遲滯器就是實現這個遞進的物理元件。</li>
                </ul>
                
                <h4><strong>（3）波片的功能直觀化</strong></h4>
                <ul>
                    <li>"快軸"和"慢軸"控制哪個場分量被相移，決定偏振狀態如何遞進。</li>
                    <li>只要選好快軸與光的偏振方向，施加適當相位差（如$\frac{\pi}{4}$、$\frac{\pi}{2}$、$\pi $……）即可實現線偏振、圓偏振、橢圓偏振的各種轉換。</li>
                </ul>
                
                <style>
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th>相位差</th>
                            <th>偏振狀態</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>線偏振（夾角0°）</td>
                        </tr>
                        <tr>
                            <td>$\frac{\pi}{4}$</td>
                            <td>左橢圓偏振</td>
                        </tr>
                        <tr>
                            <td>$\frac{\pi}{2}$</td>
                            <td>左旋圓偏振</td>
                        </tr>
                        <tr>
                            <td>$\pi$</td>
                            <td>線偏振（垂直方向）</td>
                        </tr>
                        <tr>
                            <td>$\frac{3\pi}{2}$</td>
                            <td>右旋圓偏振</td>
                        </tr>
                        <tr>
                            <td>$2\pi$</td>
                            <td>線偏振（回到初始）</td>
                        </tr>
                    </tbody>
                </table>
                
                <ul>
                    <li><strong>應用範例：</strong>
                        <ul>
                            <li>設計不同相位延遲的波片，可將任意一種偏振態轉換為另一種（如線→圓、圓→橢圓）。</li>
                            <li>偏振控制實驗與成像系統設計。</li>
                            <li>依序累加相位延遲，可實現多種偏振態連續調控；常見於光通訊、顯示技術、分光儀等領域。</li>
                        </ul>
                    </li>
                </ul>
                <hr>
                
                <h4><strong>核心公式</strong></h4>
                <p><strong>相對光程差：</strong></p>
                <ul>
                    <li>當平面單色光入射到具有雙折射性的晶體（如方解石、石英、雲母）時，根據電場方向可分解為尋常光(Ordinary wave)和非常光(Extraordinary wave)兩分量。</li>
                    <li>這兩個分量因為折射率不同，以不同速度穿越材料、會產生不同光程$\Lambda$(Optical Path)。
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="0" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-n"><mjx-c class="mjx-c39B"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi mathvariant="normal">Λ</mi><mo>=</mo><mi>d</mi><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li><strong>相位差（弧度）：</strong>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="1" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-n"><mjx-c class="mjx-c394"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D714 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi mathvariant="normal">Δ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mi>d</mi><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                </ul>
                <p>其中：</p>
                <ul>
                    <li>$d$ = 板厚</li>
                    <li>$n_o, n_e$ = 尋常光和非常光折射率</li>
                    <li>$\lambda_0$ = 真空中波長</li>
                </ul>
                <p>一旦建立了遲滯器的概念，就可以將任何偏振狀態轉換為任何其他偏振狀態，並創建<strong>圓偏振片</strong>和<strong>橢圓偏振片</strong>。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.7.2 波板與菱形 (Wave Plates and Rhombs)</strong></h2>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SkrUG9EkWe.png" alt="image"></p>
                <ul>
                    <li>圖8.43顯示「方解石平板切面垂直於光軸」時（光軸垂直於出入表面），
                        <ul>
                            <li>當單色平面波正入射，電場 $\vec{E}$ 只能垂直於光軸分量傳播。</li>
                            <li>在這種結構下，「在圖面內」的電場分量（非常光）會在結晶內以橢圓波前形式擴展，並在所有方向都有不同的擴展速度（形成立體橢圓）；「垂直圖面」的分量（尋常光）則會以球形波前等速擴展。</li>
                            <li><strong>兩種次級波（o波與e波），在光軸方向上切點相切，形成一致的「包絡面」，o波與e波的包絡面重合</strong>，出射為「單一、不偏折」的平面波。即：<strong>無光程差、無雙重影像、也無相對相位延遲現象</strong>。</li>
                        </ul>
                    </li>
                    <li>圖8.44顯示「光軸平行於平板表面」的方解石平板。
                        <ul>
                            <li>若入射光為單色波，其電場可分為「平行光軸」和「垂直光軸」兩分量。</li>
                            <li>這兩分量在晶體內各自以不同的速度—$v_o$, $v_e$（分別受$n_o$, $n_e$支配）分別前進。</li>
                            <li>當光穿透厚度$d$後，「o波」和「e波」總會累積出一個**相對光程差**。</li>
                            <li>出射後的波是「o波與e波」的疊加，現在具有一個明顯的**相對相位差$\omega$**，計算公式為 $\omega = \frac{2\pi}{\lambda_0} d (n_o - n_e)$，其中$\lambda_0$是真空波長。</li>
                            <li><strong>偏振型態因o波、e波分量的幅度與相位差而定，這是設計各類波片/遲滯器的基礎原理。</strong></li>
                            <li>這種幾何結構就會使方解石平板具備雙折射現象，「雙影」「偏振改變」和「相位延遲」皆由此而來。</li>
                        </ul>
                    </li>
                </ul>
                
                <h4><strong>結論比較</strong></h4>
                <style>
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th>圖號</th>
                            <th>切面與光軸</th>
                            <th>主要現象</th>
                            <th>出射波/影像</th>
                            <th>應用意義</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>圖8.43</td>
                            <td>光軸⊥平板</td>
                            <td>無光程差、無相對相位差</td>
                            <td>單一影像</td>
                            <td>雙影消失，僅作通光窗口</td>
                        </tr>
                        <tr>
                            <td>圖8.44</td>
                            <td>光軸∥平板</td>
                            <td>兩分量累積光程差→相對相位延遲</td>
                            <td>偏振改變、可能雙影</td>
                            <td>波片/遲滯器設計基礎</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                
                <h3><strong>1. 全波板 (Full-Wave Plate)</strong></h3>
                <h4><strong>定義</strong></h4>
                <p>當相對遲滯 $\Delta\omega = 2\pi$ 時，相對遲滯為一個波長，此時 e 波和 o 波重新同相，對入射單色光束的偏振沒有可觀察到的影響。</p>
                <h4><strong>原理</strong></h4>
                <p>全波板只能在特定波長下以討論的方式工作，因此這類遲滯器被稱為<strong>色散型</strong>。</p>
                <h4><strong>公式</strong></h4>
                <p>$$ \Delta\omega = 2\pi $$</p>
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li>消除光學系統中光線通過時的偶然偏振狀態變化</li>
                    <li>製作窄波長濾光片</li>
                    <li>校正金屬表面反射鏡引入的相位移位</li>
                </ul>

                <h3><strong>2. 半波板 (Half-Wave Plate)</strong></h3>
                <h4><strong>定義</strong></h4>
                <p>引入 $\pi$ 弧度（或180°）相對相位差的遲滯板稱為半波板或半波遲滯器。</p>
                <h4><strong>原理</strong></h4>
                <p>半波板可以將線偏振光的偏振面旋轉 $2\theta$ 角，其中 $\theta$ 是入射光與快軸的夾角。<strong>它會反轉圓偏振光或橢圓偏振光的手性</strong>。</p>
                <h4><strong>公式</strong></h4>
                <p><strong>厚度條件：</strong>
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="2" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45A TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                            <mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>d</mi><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mfrac><msub><mi>λ</mi><mn>0</mn></msub><mn>2</mn></mfrac></math></mjx-assistive-mml>
                    </mjx-container>
                </p>
                <p>其中 $m = 0, 1, 2, \ldots$</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/Bk_hzcNy-e.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/ryHCfqNyWl.png" alt="image"></p>
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li>偏振旋轉器</li>
                    <li>改變圓偏振光的手性（右旋→左旋，反之亦然）</li>
                    <li>使用膠帶製作簡易半波板</li>
                </ul>

                <h3><strong>3. 四分之一波板 (Quarter-Wave Plate)</strong></h3>
                <h4><strong>定義</strong></h4>
                <p>引入相對相位移 $$\Delta\omega = \pi/2$$ 的光學元件，可在正交的 o 波和 e 波分量之間產生90°相位差。</p>
                <h4><strong>原理</strong></h4>
                <ul>
                    <li><strong>線偏振→圓偏振：</strong> 45°線偏振光入射時產生圓偏振光</li>
                    <li><strong>圓偏振→線偏振：</strong> 圓偏振光入射時產生線偏振光</li>
                    <li>產生的圓偏振光手性取決於線偏振光旋轉到慢軸的最小角度方向</li>
                </ul>
                <h4><strong>公式</strong></h4>
                <p><strong>厚度條件：</strong>
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="3" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n"><mjx-c class="mjx-c34"></mjx-c></mjx-mn>
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45A TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                            <mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c34"></mjx-c></mjx-mn></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>d</mi><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><mo>=</mo><mo stretchy="false">(</mo><mn>4</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mfrac><msub><mi>λ</mi><mn>0</mn></msub><mn>4</mn></mfrac></math></mjx-assistive-mml>
                    </mjx-container>
                </p>
                <p>其中 $m = 0, 1, 2, \ldots$</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/BkCgmcE1-l.png" alt="image"></p>
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li>製作圓偏振器的關鍵元件</li>
                    <li>使用保鮮膜疊層製作簡易四分之一波板</li>
                    <li>光學檢測和分析系統</li>
                </ul>

                <h3><strong>4. 菲涅耳菱形 (Fresnel Rhomb)</strong></h3>
                <h4><strong>定義</strong></h4>
                <p>利用全內反射過程在兩個正交場分量之間引入相對相位差的光學元件。</p>
                <h4><strong>原理</strong></h4>
                <p>玻璃中(n = 1.51)在特定入射角54.6°時，內反射伴隨45°相位移。<strong>菲涅耳菱形使光束經歷兩次內反射，總共產生90°相對相位移</strong>。</p>
                <h4><strong>公式</strong></h4>
                <p>入射角：$\theta_i = 54.6°$ （對於 n = 1.51 的玻璃）</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/By2c85VJbl.png" alt="image"></p>
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li>本質上是<strong>消色差90°遲滯器</strong></li>
                    <li>兩個菱形端對端組合可在寬波長帶（≈2000 nm）上產生 $\lambda_0/2$ 遲滯</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.7.3 遲滯器分類表格</strong></h2>
                <style>
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th><strong>遲滯器類型</strong></th>
                            <th><strong>相位差 Δω</strong></th>
                            <th><strong>主要功能</strong></th>
                            <th><strong>典型材料</strong></th>
                            <th><strong>應用特色</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>全波板</strong></td>
                            <td>2π (360°)</td>
                            <td>無偏振效應（特定波長）</td>
                            <td>石英、雲母</td>
                            <td>濾光器、校正系統</td>
                        </tr>
                        <tr>
                            <td><strong>半波板</strong></td>
                            <td>π (180°)</td>
                            <td>偏振旋轉2θ、手性反轉</td>
                            <td>石英、雲母、賽璐珞膠帶</td>
                            <td>偏振旋轉器</td>
                        </tr>
                        <tr>
                            <td><strong>四分之一波板</strong></td>
                            <td>π/2 (90°)</td>
                            <td>線偏振↔圓偏振轉換</td>
                            <td>石英、雲母、聚合物</td>
                            <td>圓偏振器製作</td>
                        </tr>
                        <tr>
                            <td><strong>菲涅耳菱形</strong></td>
                            <td>π/2 (90°)</td>
                            <td>消色差遲滯</td>
                            <td>玻璃 (n=1.51)</td>
                            <td>寬頻段應用</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.7.4 補償器和可變遲滯器 (Compensators and Variable Retarders)</strong></h2>
                
                <h3><strong>1. 巴比內補償器 (Babinet Compensator)</strong></h3>
                <h4><strong>定義</strong></h4>
                <p>能夠對波施加可控遲滯的光學器件，由兩個獨立的方解石或石英楔形組成，其光軸相互垂直。</p>
                <h4><strong>原理</strong></h4>
                <p>通過調節兩個楔形的相對位置，可以連續改變相對相位差。光線通過不同位置時遇到不同的楔形厚度組合。</p>
                <h4><strong>公式</strong></h4>
                <p>
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="4" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi class="mjx-n"><mjx-c class="mjx-c394"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D714 TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi mathvariant="normal">Δ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mo stretchy="false">(</mo><msub><mi>d</mi><mn>1</mn></msub><mo>−</mo><msub><mi>d</mi><mn>2</mn></msub><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow></math></mjx-assistive-mml>
                    </mjx-container>
                </p>
                <p>其中 $d_1, d_2$ 為上下楔形在該點的厚度</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/B1wTL94J-l.png" alt="image"></p>
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li>未知波板遲滯量的測量</li>
                    <li>在交叉偏振器間產生彩色條紋圖案</li>
                    <li>精密偏振測量</li>
                </ul>

                <h3><strong>2. 索萊伊補償器 (Soleil Compensator)</strong></h3>
                <h4><strong>定義</strong></h4>
                <p>巴比內補償器的改良版，由兩個楔形和一個平行平板組成，<strong>產生均勻的遲滯量且無光束偏折</strong>。</p>
                <h4><strong>原理</strong></h4>
                <p>通過組合楔形結構，在整個表面產生均勻遲滯，同時消除光束偏折問題。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rkuJP5VkZx.png" alt="image"></p>
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li>需要均勻遲滯的精密光學應用</li>
                    <li>紅外光應用（使用MgF₂和CdS材料）</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.7.5 遲滯器材料與製作</strong></h2>
                <h3><strong>常用材料分類</strong></h3>
                <style>
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th><strong>材料類型</strong></th>
                            <th><strong>代表材料</strong></th>
                            <th><strong>特性</strong></th>
                            <th><strong>波段應用</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>晶體材料</strong></td>
                            <td>石英、方解石</td>
                            <td>高精度、穩定</td>
                            <td>可見光</td>
                        </tr>
                        <tr>
                            <td><strong>層狀礦物</strong></td>
                            <td>雲母（白雲母）</td>
                            <td>易劈裂、大面積</td>
                            <td>可見光</td>
                        </tr>
                        <tr>
                            <td><strong>聚合物</strong></td>
                            <td>聚乙烯醇</td>
                            <td>可拉伸定向</td>
                            <td>可見光</td>
                        </tr>
                        <tr>
                            <td><strong>紅外材料</strong></td>
                            <td>MgF₂、CdS</td>
                            <td>透紅外</td>
                            <td>3000-12000 nm</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4><strong>Multiple-order retarder（多階遲滯器）與 zero-order retarder（零階遲滯器）的差異</strong></h4>
                
                <h4><strong>一、基本定義</strong></h4>
                <p><strong>Zero-order retarder（零階遲滯器)</strong></p>
                <ul>
                    <li>指厚度最薄、只產生一次所需相位延遲的波片，例如四分之一波片、半波片。</li>
                    <li>結構公式：只需要達到 $\omega = \pi/2$（QWP）或 $\omega = \pi$（HWP），厚度最小。</li>
                    <li><strong>零階波片（最薄）：</strong>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="5" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mtext>zero</mtext></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mtext>所需相位差</mtext><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-cD7"></mjx-c></mjx-mo>
                                <mjx-msub space="2"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>d</mi><mrow data-mjx-texclass="ORD"><mtext>zero</mtext></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mtext>所需相位差</mtext><mo stretchy="false">)</mo><mo>×</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow></mrow></mfrac></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li>優點：色散影響最小、視場角大、波長和溫度變化時性能最穩定。</li>
                </ul>
                
                <p><strong>Multiple-order retarder（多階遲滯器)</strong></p>
                <ul>
                    <li>指歷經多個完整週期（如多個$2\pi$）再加上所需相位延遲的波片，即：
                    $\omega = (2m\pi) + \text{所需相位差}$（m為正整數，大於零）。</li>
                    <li><strong>多階波片：</strong>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="6" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mtext>multiple</mtext></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mn>2</mn><mi>m</mi><mi>π</mi><mo>+</mo><mtext>所需相位差</mtext><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-cD7"></mjx-c></mjx-mo>
                                <mjx-msub space="2"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                <mjx-mo class="mjx-n" space="2">,</mjx-mo>
                                <mjx-mi class="mjx-i" space="2"><mjx-c class="mjx-c1D45A TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3E"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c30"></mjx-c></mjx-mn>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>d</mi><mrow data-mjx-texclass="ORD"><mtext>multiple</mtext></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mi>π</mi><mo>+</mo><mtext>所需相位差</mtext><mo stretchy="false">)</mo><mo>×</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow></mrow></mfrac><mo>,</mo><mspace width="1em"></mspace><mi>m</mi><mo>&gt;</mo><mn>0</mn></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li>板材較厚（多倍波長光程），製作容易、成本低。</li>
                </ul>
                
                <p><strong>關鍵差異比較</strong></p>
                <style>
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Zero-order（零階）</th>
                            <th>Multiple-order（多階）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>結構厚度</strong></td>
                            <td>最薄（單次遲滯）</td>
                            <td>幾倍波長（多次遲滯）</td>
                        </tr>
                        <tr>
                            <td><strong>色散敏感性</strong></td>
                            <td>最低</td>
                            <td>高：波長變化導致遲滯大幅改變</td>
                        </tr>
                        <tr>
                            <td><strong>溫度敏感性</strong></td>
                            <td>最低</td>
                            <td>高：溫度改變、遲滯易失準</td>
                        </tr>
                        <tr>
                            <td><strong>視場角</strong></td>
                            <td>大</td>
                            <td>小</td>
                        </tr>
                        <tr>
                            <td><strong>成本/製作難度</strong></td>
                            <td>製作難且脆弱，成本高</td>
                            <td>板材厚、製作容易、低成本</td>
                        </tr>
                        <tr>
                            <td><strong>常見應用</strong></td>
                            <td>精密偏振控制、科研</td>
                            <td>一般量測、成本敏感場域</td>
                        </tr>
                        <tr>
                            <td><strong>波長適應性</strong></td>
                            <td>適用寬波段</td>
                            <td>通常僅適用單一波長</td>
                        </tr>
                    </tbody>
                </table>
                
                <p><strong>注意事項</strong></p>
                <ol>
                    <li>選擇依據應用需求：
                        <ul>
                            <li>精密偏振控制、寬波長需求：選擇零階遲滯器</li>
                            <li>成本考量、不需高穩定性：可選擇多階遲滯器</li>
                        </ul>
                    </li>
                    <li>溫度與波長敏感性：
                        <ul>
                            <li>多階遲滯器因多個完整週期，波長或溫度略微改變時，總相位差易超出設計值，易導致偏振失真。</li>
                            <li>零階遲滯器對外界變化（如溫度、角度、波長）較不敏感，穩定性佳。</li>
                        </ul>
                    </li>

                    <li>組合型零階遲滯器：
                        <ul>
                            <li>可將兩片多階波片疊加（快軸、慢軸交錯），使總遲滯量僅為兩者差值，改善溫度與波長敏感問題，但視場角仍較小。</li>
                        </ul>
                    </li>
                    <li>機械強度考量：
                        <ul>
                            <li>零階波片太薄易碎，實際製作上需額外保護，或利用複合結構。</li>
                        </ul>
                    </li>
                    <li>常見材料：
                        <ul>
                            <li>石英、雲母適合做零階波片；聚合物因微小雙折射也可做零階波片，視場角大，口徑長、應用方便。</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>零階遲滯器主打穩定性與精度、適合科研與精密儀器，多階遲滯器重成本與易製造，適合一般場域。辨析兩者的敏感性與應用情境，是選用偏振光元件的關鍵。</strong>[1]</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.7.6 實例計算</strong></h2>
                <h4><strong>例題：雲母四分之一波板厚度計算</strong></h4>
                <p><strong>已知條件：</strong></p>
                <ul>
                    <li>波長：λ₀ = 589 nm</li>
                    <li>雲母折射率：n₁ = 1.5997，n₂ = 1.5941</li>
                </ul>
                <p><strong>求解：</strong></p>
                <p>對四分之一波板，光程差必須是 λ₀/4 的奇數倍：</p>
                <p>
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="7" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n"><mjx-c class="mjx-c34"></mjx-c></mjx-mn>
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45A TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c34"></mjx-c></mjx-mn>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c7C"></mjx-c></mjx-mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>d</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mrow data-mjx-texclass="ORD"><mo stretchy="false">|</mo></mrow></mrow></mfrac></math></mjx-assistive-mml>
                    </mjx-container>
                </p>
                <p>當 m = 0 時：
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="8" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mn>589</mn><mtext> nm</mtext></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-mrow><mn>4</mn><mo stretchy="false">(</mo><mn>1.5997</mn><mo>−</mo><mn>1.5941</mn><mo stretchy="false">)</mo></mjx-mrow></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c36"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c33"></mjx-c></mjx-mn>
                            <mjx-mtext space="2"><mjx-c class="mjx-c3BC"></mjx-c><mjx-c class="mjx-c6D"></mjx-c></mjx-mtext>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>d</mi><mo>=</mo><mfrac><mrow><mn>589</mn><mtext> nm</mtext></mrow><mrow><mn>4</mn><mo stretchy="false">(</mo><mn>1.5997</mn><mo>−</mo><mn>1.5941</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>26.3</mn><mtext> μm</mtext></math></mjx-assistive-mml>
                    </mjx-container>
                </p>
                <p><strong>複合零階波板遲滯量：</strong>
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="9" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi class="mjx-n"><mjx-c class="mjx-c394"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D714 TEX-I"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo>
                            <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                            <mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub>
                            <mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi mathvariant="normal">Δ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mo stretchy="false">(</mo><msub><mi>d</mi><mn>1</mn></msub><mo>−</mo><msub><mi>d</mi><mn>2</mn></msub><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                    </mjx-container>
                </p>
                <p>此表達式依賴於兩個分量板厚度的<strong>差值</strong>，而非單個板的厚度。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.7.7 圓偏振器 (Circular Polarizers)</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <p>由適當定向的線偏振器和90°遲滯器的串聯組合構成，能夠產生圓偏振光的器件。</p>
                
                <h3><strong>原理</strong></h3>
                <p>電場與四分之一波板主軸成45°的線偏振光，經過該板後變為圓偏振。<strong>出射圓偏振光的手性取決於線偏振器透射軸相對於遲滯器快軸是+45°還是-45°</strong>。</p>
                
                <h3><strong>公式</strong></h3>
                <p>線偏振器與快軸夾角決定手性：</p>
                <ul>
                    <li>+45°：產生一種手性</li>
                    <li>-45°：產生相反手性</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/Syezwc4yWl.png" alt="image"></p>
                
                <h3><strong>應用範例</strong></h3>
                <ul>
                    <li><strong>CP-HN商用圓偏振器</strong>：HN偏振片與拉伸聚乙烯醇90°遲滯器的疊層</li>
                    <li><strong>雙向圓偏振器</strong>：線偏振器位於兩個分別定向為+45°和-45°的遲滯器之間</li>
                    <li><strong>圓偏振光分析</strong>：用於確定已知圓偏振光的手性</li>
                </ul>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-circular": {
        html: `
            <h1 class="chapter-title">8.8 圓偏振器（Circular Polarizers）</h1>
            <section class="learning-module">
                <h2><strong>定義</strong></h2>
                <p>圓偏振器是利用線偏振器與四分之一波片 (quarter-wave plate) 組成，可以產生或分析圓偏振光。其手性（左旋或右旋）由偏振器的傳輸軸角度決定。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>原理</strong></h2>
                <ul>
                    <li>線偏振光經 45° 方向的四分之一波片後，將變成圓偏振光。</li>
                    <li>一個正確配置的線偏振器與 90° 熱退波片組合可做圓偏振器。</li>
                    <li>圓偏振器的組件可完全獨立運作，且可能來自不同型態（如一個為雙折射、一個為反射型）。</li>
                    <li>雙波片夾著線偏振器，可雙向產生左旋/右旋圓偏振。</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>關鍵公式</strong></h2>
                <ul>
                    <li>偏振狀態可由 Jones 向量描述（略，原文有多組公式）。</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>應用範例</strong></h2>
                <ul>
                    <li>CP-HN（商業型圓偏振器）：HN Polaroid 片與拉伸聚乙烯醇 90° 波片板層壓製成。</li>
                    <li>作為分析器判斷已知圓偏振波的手性。</li>
                    <li>圓偏振器在正反面入射有不同結果（入射於偏振器則產生線偏振光）。</li>
                </ul>
            </section>
            
            <h1 class="chapter-title">8.9 多色光的偏振（Polarization of Polychromatic Light）</h1>
            <section class="learning-module">
                <h2><strong>8.9.1 多色波的頻帶寬度與相干時間</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <ul>
                    <li>真正的單色光需完全偏振，現實光源皆屬多色光。</li>
                    <li>偏振狀態和相干性息息相關。</li>
                </ul>
                
                <h3><strong>原理</strong></h3>
                <ul>
                    <li>單色波：組成分量頻率和幅度皆固定，偏振態在整個波列中維持固定。</li>
                    <li>多色光：不同頻率組合，偏振態可隨時間變動，若組成波列相干則偏振態維持時間較長。</li>
                </ul>
                
                <h3><strong>公式</strong></h3>
                <ul>
                    <li>相干時間 <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="0" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D450 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom><mjx-mi class="mjx-n"><mjx-c class="mjx-c394"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D708 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>t</mi><mi>c</mi></msub><mo>=</mo><mn>1</mn><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><mi mathvariant="normal">Δ</mi><mi>ν</mi></math></mjx-assistive-mml></mjx-container></li>
                    <li>多色波偏振態可寫成二正交和諧態的組合：
                        <ul>
                            <li><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="1" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D438 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D438 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mi class="mjx-n" space="2"><mjx-c class="mjx-c63"></mjx-c><mjx-c class="mjx-c6F"></mjx-c><mjx-c class="mjx-c73"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c2061"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D467 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D463 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D716 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>E</mi><mi>x</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>i</mi><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>x</mi></mrow></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo>+</mo><msub><mi>ϵ</mi><mi>x</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container></li>
                            <li><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="2" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D438 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D457 TEX-I"></mjx-c></mjx-mi><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D438 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mi class="mjx-n" space="2"><mjx-c class="mjx-c63"></mjx-c><mjx-c class="mjx-c6F"></mjx-c><mjx-c class="mjx-c73"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c2061"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D458 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D467 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D463 TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D716 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>E</mi><mi>y</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>j</mi><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>y</mi></mrow></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mo stretchy="false">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo>+</mo><msub><mi>ϵ</mi><mi>y</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container></li>
                        </ul>
                    </li>
                    <li>若 <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="3" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D438 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D438 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>x</mi></mrow></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>y</mi></mrow></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container> 及 <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="4" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D716 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D716 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D461 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>ϵ</mi><mi>y</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mi>ϵ</mi><mi>x</mi></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container> 都固定，則光仍然偏振。</li>
                </ul>
                
                <h3><strong>應用範例</strong></h3>
                <ul>
                    <li>實驗中可透過偏振器將多色光轉為完全偏振。</li>
                    <li>介於完全偏振和未偏振間還有部分偏振情形。</li>
                </ul>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.9.2 干涉色（Interference Colors）</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <ul>
                    <li>多色光通過雙折射物質（如皺摺的玻璃紙）在交叉偏光片間可出現干涉色。</li>
                </ul>
                
                <h3><strong>原理</strong></h3>
                <ul>
                    <li>當波長組成因厚度或雙折射效應不同而展現不同相位延遲（retardation），導致各色波干涉產生彩色現象。</li>
                </ul>
                
                <h3><strong>公式</strong></h3>
                <ul>
                    <li>相位延遲公式：<br><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="5" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mi class="mjx-n"><mjx-c class="mjx-c394"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D711 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45C TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D452 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi mathvariant="normal">Δ</mi><mi>φ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mo stretchy="false">(</mo><msub><mi>n</mi><mi>o</mi></msub><mo>−</mo><msub><mi>n</mi><mi>e</mi></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container></li>
                    <li>不同區域因厚度及雙折射不同，出現不同顏色。</li>
                    <li>特定相位（如 <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="6" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-n"><mjx-c class="mjx-c394"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D711 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c34"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">Δ</mi><mi>φ</mi><mo>=</mo><mn>4</mn><mi>π</mi></math></mjx-assistive-mml></mjx-container>）對特定波長（如藍光）極強，其他波長則可能互相抵消。</li>
                </ul>
                
                <h3><strong>應用範例</strong></h3>
                <ul>
                    <li>觀察皺摺的玻璃紙、冰晶、雲母片等多種材料所呈現色彩。</li>
                    <li>旋轉其中任一偏振片，可使顏色互為補色而交替出現/消失。</li>
                </ul>
            </section>
            
            <h1 class="chapter-title">8.10 光學活性（Optical Activity）</h1>
            <section class="learning-module">
                <h2><strong>定義</strong></h2>
                <p>光學活性指某些物質可使入射線偏振光的振動面連續旋轉的現象。根據旋轉方向，分為右旋（dextrorotatory, d-rotatory）和左旋（levorotatory, l-rotatory）。</p>
                
                <h2><strong>原理</strong></h2>
                <ul>
                    <li>Arago 與 Biot 首發現此現象，發現在石英和某些有機液體中。</li>
                    <li>Fresnel 描述，活性物質具有圓偏振雙折射性，右/左旋圓偏振成分以不同速度傳播。</li>
                    <li>線偏振光可分解為右/左旋圓偏振；若速度不同，相位差改變，使振動面旋轉。</li>
                    <li>光學活性物質分為僅晶體活性（如石英、NaBrO₃）、溶液活性（如糖、樟腦油）、混合型（如銣酒石酸鹽）。</li>
                    <li>鏡像結構（enantimorphs），如右/左手石英晶體互為鏡像，是活性本質來源。</li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/S17p164kbx.png" alt="image"></p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/HkGAJ6V1-x.png" alt="image"></p>
                
                <h2><strong>公式</strong></h2>
                <ul>
                    <li>線偏振振動面旋轉角度：<br><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="7" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D6FD TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mrow><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D70B TEX-I"></mjx-c></mjx-mi><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi></mjx-mrow></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D706 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45F TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-msub space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D459 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>β</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mi>d</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mo stretchy="false">(</mo><msub><mi>n</mi><mi>r</mi></msub><mo>−</mo><msub><mi>n</mi><mi>l</mi></msub><mo stretchy="false">)</mo></math></mjx-assistive-mml></mjx-container><br>其中 <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="8" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45F TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>n</mi><mi>r</mi></msub></math></mjx-assistive-mml></mjx-container> 為右旋圓偏振折射率，<mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="9" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45B TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D459 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msub><mi>n</mi><mi>l</mi></msub></math></mjx-assistive-mml></mjx-container> 為左旋，$d$ 為厚度。</li>
                    <li>石英（鈉光）旋旋力：
                        <ul>
                            <li><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="inline" tabindex="0" ctxtmenu_counter="10" style="font-size: 100%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D6FD TEX-I"></mjx-c></mjx-mi><mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D451 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo><mjx-msup space="3"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c37"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.403em;"><mjx-mo class="mjx-n" size="s"><mjx-c class="mjx-c2218"></mjx-c></mjx-mo></mjx-script></mjx-msup><mjx-texatom texclass="ORD"><mjx-mo class="mjx-n"><mjx-c class="mjx-c2F"></mjx-c></mjx-mo></mjx-texatom><mjx-mtext class="mjx-n"><mjx-c class="mjx-c6D"></mjx-c><mjx-c class="mjx-c6D"></mjx-c></mjx-mtext></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>β</mi><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><mi>d</mi><mo>=</mo><msup><mn>21.7</mn><mo>∘</mo></msup><mrow data-mjx-texclass="ORD"><mo>/</mo></mrow><mtext>mm</mtext></math></mjx-assistive-mml></mjx-container></li>
                        </ul>
                    </li>
                </ul>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/BJ55x6Vybl.png" alt="image"></p>
                <ul>
                    <li>圖 8.57 描述在光學活性物質（如石英）中，原本線偏振的光於入射點（z=0）的電場分佈。</li>
                    <li>線偏振光可以視為「右旋圓偏振」與「左旋圓偏振」兩種分量的疊加。<br>在z=0 處，這兩分量的相位相同，因而合成的結果仍為線偏振光，電場朝既定方向震動。</li>
                </ul>
                
                <h2><strong>應用範例</strong></h2>
                <ul>
                    <li>石英晶體、糖溶液（檢測糖含量）、樟腦油、酒石酸的等分離及生物化學應用。</li>
                    <li>光學活性能用來分辨有機化學、蛋白質結構。</li>
                </ul>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-math": {
        html: `
            <h1 class="chapter-title">8.13 極化的數學描述</h1>
            
            <section class="learning-module">
                <h2><strong>8.13.1 Stokes參數</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <p><strong>Stokes參數</strong>是用來描述光的極化狀態的四個量，源自G. G. Stokes於1852年提出。它們只與電磁波的可觀測量相關，可以表示自然光、完全或部分極化光的極化狀態。</p>
                
                <h3><strong>原理</strong></h3>
                <p>傳統的極化表示以電場分量為主。若將光波的極化現象用可直接量測的「輻照度（irradiance）」來描述，則更方便做實驗及推導，並且能聯繫經典與量子光學的理論。</p>
                
                <h3><strong>公式</strong></h3>
                <ul>
                    <li><strong>Stokes 參數測量方法</strong>利用四種濾光片分別測量光強度 $(I_0, I_1, I_2, I_3)$
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="0" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><msub><mi>I</mi><mn>0</mn></msub><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.52</mn><mi>a</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="1" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c62"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>0</mn></msub><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.52</mn><mi>b</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="2" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c63"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>0</mn></msub><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.52</mn><mi>c</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="3" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c49 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c64"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><msub><mi>I</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>0</mn></msub><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.52</mn><mi>d</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        其中 $S_0$ 為入射輻照度，$S_1, S_2, S_3$ 描述極化狀態。
                    </li>
                    <li><strong>以電場分量計算的Stokes參數</strong>：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="4" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2329"></mjx-c></mjx-mo>
                                <mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.421em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c232A"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2329"></mjx-c></mjx-mo>
                                <mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.421em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c232A"></mjx-c></mjx-mo>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c33"></mjx-c><mjx-c class="mjx-c61"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>0</mn></msub><mo>=</mo><mo fence="false" stretchy="false">⟨</mo><msubsup><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>x</mi></mrow><mn>2</mn></msubsup><mo fence="false" stretchy="false">⟩</mo><mo>+</mo><mo fence="false" stretchy="false">⟨</mo><msubsup><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>y</mi></mrow><mn>2</mn></msubsup><mo fence="false" stretchy="false">⟩</mo><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.53</mn><mi>a</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="5" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2329"></mjx-c></mjx-mo>
                                <mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.421em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c232A"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2329"></mjx-c></mjx-mo>
                                <mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.421em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c232A"></mjx-c></mjx-mo>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c33"></mjx-c><mjx-c class="mjx-c62"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mo fence="false" stretchy="false">⟨</mo><msubsup><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>x</mi></mrow><mn>2</mn></msubsup><mo fence="false" stretchy="false">⟩</mo><mo>−</mo><mo fence="false" stretchy="false">⟨</mo><msubsup><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>y</mi></mrow><mn>2</mn></msubsup><mo fence="false" stretchy="false">⟩</mo><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.53</mn><mi>b</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="6" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c2329"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub>
                                <mjx-mi class="mjx-n" space="2"><mjx-c class="mjx-c63"></mjx-c><mjx-c class="mjx-c6F"></mjx-c><mjx-c class="mjx-c73"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c2061"></mjx-c></mjx-mo>
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D716 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c232A"></mjx-c></mjx-mo>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c33"></mjx-c><mjx-c class="mjx-c63"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo fence="false" stretchy="false">⟨</mo><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>x</mi></mrow></msub><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>y</mi></mrow></msub><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>ϵ</mi><mo fence="false" stretchy="false">⟩</mo><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.53</mn><mi>c</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="7" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-script></mjx-msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c32"></mjx-c></mjx-mn>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c2329"></mjx-c></mjx-mo>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub>
                                <mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-texatom></mjx-script></mjx-msub>
                                <mjx-mi class="mjx-n" space="2"><mjx-c class="mjx-c73"></mjx-c><mjx-c class="mjx-c69"></mjx-c><mjx-c class="mjx-c6E"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c2061"></mjx-c></mjx-mo>
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c1D716 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n"><mjx-c class="mjx-c232A"></mjx-c></mjx-mo>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c33"></mjx-c><mjx-c class="mjx-c64"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mi>S</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mo fence="false" stretchy="false">⟨</mo><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>x</mi></mrow></msub><msub><mi>E</mi><mrow data-mjx-texclass="ORD"><mn>0</mn><mi>y</mi></mrow></msub><mi>sin</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>ϵ</mi><mo fence="false" stretchy="false">⟩</mo><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.53</mn><mi>d</mi><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li><strong>極化度</strong>：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="8" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-mi class="mjx-i"><mjx-c class="mjx-c50 TEX-I"></mjx-c></mjx-mi>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mfrac space="3"><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-sqrt><mjx-root><mjx-line type="sq"></mjx-line><mjx-box><mjx-msubsup><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msubsup space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo>
                                <mjx-msubsup space="3"><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c33"></mjx-c></mjx-mn></mjx-script><mjx-script style="vertical-align: 0.403em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msubsup></mjx-box></mjx-root></mjx-sqrt></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c53 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-script></mjx-msub></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c35"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>P</mi><mo>=</mo><mfrac><msqrt><msubsup><mi>S</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>S</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>S</mi><mn>3</mn><mn>2</mn></msubsup></msqrt><msub><mi>S</mi><mn>0</mn></msub></mfrac><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.55</mn><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                </ul>
                
                <h3><strong>應用範例</strong></h3>
                <p>例如，若光束完全水平極化（無垂直分量），正規化Stokes參數為 (1, 1, 0, 0)；完全垂直為 (1, -1, 0, 0)；完全自然光為 (1, 0, 0, 0)。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.13.2 Jones向量</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <p>Jones向量是美國物理學家R. C. Jones在1941年發明的極化光表示法，專為完全極化且相干（coherent）光設計，以光的電場向量直接描述。</p>
                
                <h3><strong>原理</strong></h3>
                <p>極化光的電場可用二維複數向量
                    <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="9" style="font-size: 100%; position: relative;">
                        <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                            <mjx-mi mathvariant="bold"><mjx-c class="mjx-c45 TEX-B"></mjx-c></mjx-mi>
                            <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                            <mjx-mrow space="3"><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 1.303em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c45 TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em; margin-left: -0.026em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msub></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow>
                        </mjx-math>
                        <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">E</mi></mrow><mo>=</mo><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><msub><mi>E</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd><msub><mi>E</mi><mi>y</mi></msub></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml>
                    </mjx-container>
                表示。兩束光相加，即向量分量相加。</p>
                
                <h3><strong>公式與分類表格</strong></h3>
                <p>Jones向量與Stokes參數對照表：</p>
                <style>
                    table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                    td mjx-container[display="true"] { margin: 0; }
                </style>
                <table>
                    <thead>
                        <tr>
                            <th>極化態</th>
                            <th>Stokes向量</th>
                            <th>Jones向量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>水平 ($P$-state)</td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="10" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="11" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                        </tr>
                        <tr>
                            <td>垂直 ($P$-state)</td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="12" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.887em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="13" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                        </tr>
                        <tr>
                            <td>45度 ($P$-state)</td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="14" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="15" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-sqrt><mjx-root><mjx-line type="sq"></mjx-line><mjx-box><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-box></mjx-root></mjx-sqrt></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                        </tr>
                        <tr>
                            <td>-45度 ($P$-state)</td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="16" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.887em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="17" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-sqrt><mjx-root><mjx-line type="sq"></mjx-line><mjx-box><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-box></mjx-root></mjx-sqrt></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.887em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                        </tr>
                        <tr>
                            <td>右旋圓極化 ($\mathcal{R}$)</td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="18" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="19" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-sqrt><mjx-root><mjx-line type="sq"></mjx-line><mjx-box><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-box></mjx-root></mjx-sqrt></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.887em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mo>−</mo><mi>i</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                        </tr>
                        <tr>
                            <td>左旋圓極化 ($\mathcal{L}$)</td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="20" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.887em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                            <td><mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="21" style="font-size: 100%; position: relative;"><mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;"><mjx-mfrac><mjx-frac type="d"><mjx-num><mjx-nstrut type="d"></mjx-nstrut><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-num><mjx-dbox><mjx-dtable><mjx-line type="d"></mjx-line><mjx-row><mjx-den><mjx-dstrut type="d"></mjx-dstrut><mjx-sqrt><mjx-root><mjx-line type="sq"></mjx-line><mjx-box><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-box></mjx-root></mjx-sqrt></mjx-den></mjx-row></mjx-dtable></mjx-dbox></mjx-frac></mjx-mfrac><mjx-mrow><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 0.722em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0px 0.333em; text-align: center;"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0px 0.167em; text-align: center;"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D456 TEX-I"></mjx-c></mjx-mi></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow></mjx-math><mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mi>i</mi></mtd></mtr></mtable><mo>)</mo></mrow></math></mjx-assistive-mml></mjx-container></td>
                        </tr>
                    </tbody>
                </table>

                <h3><strong>應用範例</strong></h3>
                <p>例如，$P$-state光經由複數光學元件（如波片、偏振片）後，可以直接用矩陣運算得出出射Jones向量，並分析極化態變化。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>8.13.3 Jones與Mueller矩陣方法</strong></h2>
                
                <h3><strong>定義</strong></h3>
                <p>Jones 矩陣方法適用於相干、完全極化光；Mueller矩陣方法可處理部分極化或非極化光，且能表示複雜元件的極化特性。</p>
                
                <h3><strong>原理</strong></h3>
                <ul>
                    <li>任意極化光通過光學元件皆可以矩陣方式描述。</li>
                    <li>Jones：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="22" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi mathvariant="bold"><mjx-c class="mjx-c45 TEX-B"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c41 TEX-I"></mjx-c></mjx-mi>
                                <mjx-msub><mjx-mi mathvariant="bold"><mjx-c class="mjx-c45 TEX-B"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>n</mi></mrow></msub>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">E</mi></mrow><mrow data-mjx-texclass="ORD"><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub><mo>=</mo><mi>A</mi><msub><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">E</mi></mrow><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>n</mi></mrow></msub></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li>Mueller：
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="23" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi mathvariant="bold"><mjx-c class="mjx-c53 TEX-B"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c4D TEX-I"></mjx-c></mjx-mi>
                                <mjx-msub><mjx-mi mathvariant="bold"><mjx-c class="mjx-c53 TEX-B"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>n</mi></mrow></msub>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">S</mi></mrow><mrow data-mjx-texclass="ORD"><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub><mo>=</ M</mo><msub><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">S</mi></mrow><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>n</mi></mrow></msub></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                </ul>
                
                <h3><strong>公式</strong></h3>
                <ul>
                    <li>2x2 Jones矩陣範例
                        <mjx-container class="MathJax CtxtMenu_Attached_0" jax="CHTML" display="true" tabindex="0" ctxtmenu_counter="24" style="font-size: 100%; position: relative;">
                            <mjx-math display="true" class="MJX-TEX" aria-hidden="true" style="margin-left: 0px; margin-right: 0px;">
                                <mjx-msub><mjx-mi mathvariant="bold"><mjx-c class="mjx-c45 TEX-B"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub>
                                <mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c3D"></mjx-c></mjx-mo>
                                <mjx-mrow space="3"><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mtable style="min-width: 3.424em; padding: 0px 0.167em;"><mjx-mtr><mjx-mtd style="padding: 0.167em 0.25em 0.333em 0px; text-align: center;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D44E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub></mjx-mtd><mjx-mtd style="padding: 0.167em 0px 0.333em 0.25em; text-align: center;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D44E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub></mjx-mtd></mjx-mtr><mjx-mtr><mjx-mtd style="padding: 0.333em 0.25em 0.167em 0px; text-align: center;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D44E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub></mjx-mtd><mjx-mtd style="padding: 0.333em 0px 0.167em 0.25em; text-align: center;"><mjx-msub><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D44E TEX-I"></mjx-c></mjx-mi><mjx-script style="vertical-align: -0.15em;"><mjx-texatom size="s" texclass="ORD"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msub></mjx-mtd></mjx-mtr></mjx-mtable><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-mrow>
                                <mjx-msub><mjx-mi mathvariant="bold" space="3"><mjx-c class="mjx-c45 TEX-B"></mjx-c></mjx-mi><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>n</mi></mrow></msub>
                                <mjx-mtext space="2" class="mjx-n"><mjx-c class="mjx-c28"></mjx-c><mjx-c class="mjx-c38"></mjx-c><mjx-c class="mjx-c2E"></mjx-c><mjx-c class="mjx-c36"></mjx-c><mjx-c class="mjx-c36"></mjx-c><mjx-c class="mjx-c29"></mjx-c></mjx-mtext>
                            </mjx-math>
                            <mjx-assistive-mml unselectable="on" display="block"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><msub><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">E</mi></mrow><mrow data-mjx-texclass="ORD"><mi>o</mi><mi>u</mi><mi>t</mi></mrow></msub><mo>=</mo><mrow data-mjx-texclass="INNER"><mo>(</mo><mtable columnspacing="1em" rowspacing="4pt"><mtr><mtd><msub><mi>a</mi><mrow data-mjx-texclass="ORD"><mn>11</mn></mrow></msub></mtd><mtd><msub><mi>a</mi><mrow data-mjx-texclass="ORD"><mn>12</mn></mrow></msub></mtd></mtr><mtr><mtd><msub><mi>a</mi><mrow data-mjx-texclass="ORD"><mn>21</mn></mrow></msub></mtd><mtd><msub><mi>a</mi><mrow data-mjx-texclass="ORD"><mn>22</mn></mrow></msub></mtd></mtr></mtable><mo>)</mo></mrow><msub><mrow data-mjx-texclass="ORD"><mi mathvariant="bold">E</mi></mrow><mrow data-mjx-texclass="ORD"><mi>i</mi><mi>n</mi></mrow></msub><mspace width="1em"></mspace><mo stretchy="false">(</mo><mn>8.66</mn><mo stretchy="false">)</mo></math></mjx-assistive-mml>
                        </mjx-container>
                    </li>
                    <li>4x4 Mueller矩陣範例
                        <p style="text-align: center;"><img src="https://hackmd.io/_uploads/r12NO5Nk-x.png" alt="image"></p>
                    </li>
                </ul>
                
                <h3><strong>應用範例</strong></h3>
                <p>如一束自然光經水平偏振片，出射Stokes向量為原光減半且極化；如部分橢圓極化光通過波片後可直接用Mueller矩陣計算其新的極化度與形狀。</p>
            </section>
        `,
        initLogic: () => { }
    },
    "appendix-dichroism": {
        html: `
            <h1 class="chapter-title">附錄：8.3 二色向性 (Dichroism)</h1>
            <section class="learning-module">
                <h2>🎓 <strong>二色向性 (Dichroism) 的基本原理</strong></h2>
                <p><strong>二向色性是指某些晶體或物質對於不同偏振方向的光，會表現出選擇性吸收的物理現象。</strong></p>
                <p>簡單來說，當一束非偏振光（含有各種隨機方向的振動電場）通過具有二色性的材料時，會發生以下情況：</p>
                <ol>
                    <li><p><strong>選擇性吸收 (Selective Absorption)</strong>：該材料會強烈吸收某個特定偏振方向的光（我們稱之為<u>吸收軸</u>），而對於與其垂直的偏振方向的光，則幾乎不吸收，讓其順利通過（我們稱之為<u>穿透軸</u>或 <u>偏振軸</u>）。</p></li>
                    <li><p><strong>產生偏振光 (Polarization)</strong>：因此，原本非偏振的光在穿過這種材料後，只剩下與「穿透軸」方向一致的偏振光，其餘方向的偏振光都被吸收掉了。最終，出射的光就變成了線偏振光。</p></li>
                </ol>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/SyY7cXjRgg.png" alt="Dichroism diagram 1"></p>
                <p><em>電氣石都是化學成分各不相同的矽酸硼化物</em></p>
                
                <p><strong>形象化比喻：</strong></p>
                <p>您可以將具有二色性的材料想像成一個「柵欄」。</p>
                <ul>
                    <li><strong>非偏振光</strong>：就像一群人從四面八方隨意跑向柵欄。</li>
                    <li><strong>二色性材料（柵欄）</strong>：只有身體側向與柵欄縫隙平行的人（特定偏振方向的光）才能通過。</li>
                    <li><strong>被吸收的光</strong>：身體方向與柵欄垂直的人（其他偏振方向的光）會被擋住。</li>
                    <li><strong>穿透的偏振光</strong>：最終通過柵欄的人群，都只能以同一個方向前進。</li>
                </ul>
                <p>這個現象的物理本質，與材料的分子或晶格結構有關。在這些材料中，其分子排列具有明顯的方向性，使得電子只能在特定方向上有效地與光的電場相互作用並吸收其能量。</p>
                <p style="text-align: center;"><img src="https://hackmd.io/_uploads/rytttQo0ll.png" alt="Dichroism diagram 2"></p>
                <p><strong>Y方向：</strong>電場y分量沿導線長軸驅動傳導電子産生電流。電子和晶格原子碰撞，傳遞能量導線變熱。沿著y軸加速的電子向前向後都輻射電磁波，向前輻射的電磁波與入射波相抵消，從而y分量透過很少或者根本不透過。<br>
                <strong>Z方向：</strong>電子不能移動很遠，z分量不受影響。</p>
            </section>
            
            <section class="learning-module">
                <h2><strong>二色向性在偏振片 (Polarizer) 的應用</strong></h2>
                <p>二色性是製造現代最常見的<strong>吸收型偏振片（Absorptive Polarizer）</strong>的核心原理。這種類型的偏振片，也常被稱為「寶麗來（Polaroid）偏振片」，其發明大大降低了偏振光的生產成本，使其得以廣泛應用。</p>
                <p><strong>其結構與運作方式如下：</strong></p>
                <ol>
                    <li><p><strong>材料選擇</strong>：最經典的材料是聚乙烯醇（Polyvinyl Alcohol, PVA）薄膜。</p></li>
                    <li><p><strong>拉伸定向</strong>：首先，將PVA薄膜加熱並沿一個方向強力拉伸。這個過程會使得原本隨機排列的長鏈聚合物分子，沿著拉伸方向整齊排列。</p></li>
                    <li><p><strong>染色（摻雜）</strong>：接著，將拉伸後的薄膜浸泡在富含碘（Iodine）的溶液中。碘分子會附著在整齊排列的PVA長鏈上，形成導電的碘鏈。</p></li>
                    <li><p><strong>形成「吸收軸」</strong>：這些沿著PVA分子鏈排列的碘鏈，就像一根根微小的導線。當入射光的電場方向與這些碘鏈平行時，會驅動碘鏈中的電子產生電流，光的能量因此被吸收並轉化為熱能。這個方向就成了偏振片的<strong>吸收軸</strong>。</p></li>
                    <li><p><strong>形成「穿透軸」</strong>：當入射光的電場方向與碘鏈垂直時，電子無法在短軸方向上有效移動，因此光的能量不會被吸收，光線便能順利穿透。這個方向就是偏振片的<strong>穿透軸</strong>。</p></li>
                </ol>
                <p><strong>結論：</strong></p>
                <p>一片典型的偏振片，就是利用其內部分子結構的有序排列，創造出一個特定的「吸收軸」。當自然光通過時，與吸收軸平行的電場分量被吸收，而與其垂直的電場分量則被允許通過，從而將非偏振的自然光轉變為線偏振光。</p>
            </section>
            
            <section class="learning-module">
                <h2>相關影片</h2>
                <div class="video-container">
                    <iframe frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/cNJPzpMJfxI" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://player.bilibili.com/player.html?isOutside=true&aid=540074514&bvid=BV1vi4y1b7a3&cid=172339009&p=1" frameborder="no" allowfullscreen="true"></iframe>
                </div>
            </section>

            <section class="learning-module">
                <h2><strong>二色性偏振片的應用實例</strong></h2>
                <ul>
                    <li><strong>LCD 顯示器</strong>：液晶顯示器的每個像素前後都各有一片偏振片，通過控制液晶分子的旋轉來決定光的通過或阻擋，從而顯示圖像。</li>
                    <li><strong>太陽眼鏡</strong>：偏光太陽眼鏡可以過濾掉來自水面、路面等水平面的反射眩光（這些眩光主要是水平偏振光），讓視野更清晰舒適。</li>
                    <li><strong>攝影濾鏡</strong>：攝影師使用偏光鏡（CPL鏡）來消除反光、增加色彩飽和度，例如讓天空更藍、植物更翠綠。</li>
                    <li><strong>科學實驗</strong>：在光學實驗室中，用於產生和分析偏振光，研究材料的光学特性。</li>
                </ul>
                <p>總而言之，二色性是將特定方向光線「吸收掉」的原理，而偏振片則是利用此原理製造出來、用以產生線偏振光的關鍵光學元件。</p>
            </section>
        `,
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    "appendix-birefringence": {
        html: `
            <h1 class="chapter-title">附錄：8.4 雙折射 (Birefringence)</h1>
            
            <section class="learning-module">
                <h2>什麼是雙折射？</h2>
                <p>一般而言，當單色光從空氣或玻璃(各向同性介質)的界面折射時，只會產生一束折射光，這束光遵守斯涅爾(Snell)折射定律。然而，當單色光在各向異性晶體(如方解石 CaCO<sub>3</sub>)的界面折射時，通常會產生兩束折射光。這種現象被稱為雙折射。</p>
            </section>
            
            <section class="learning-module">
                <p>當我們將一塊透明的方解石（Calcite）晶體放在一行文字上時，會觀察到一個奇特的現象：文字會呈現出兩個清晰的影像。這個被稱為<strong>雙折射</strong>(birefringence)現象，是光與晶體交互作用最迷人的展示之一。它揭示了當一束自然光入射到這類晶體時，光線會分裂成兩束獨立的折射光線。</p>
                <img src="https://hackmd.io/_uploads/S17tzEoAle.png" alt="Calcite double refraction" style="width: 60%;">
                <img src="https://hackmd.io/_uploads/HyExJKjCgg.png" alt="Calcite double refraction 2" style="width: 60%;">
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://www.youtube.com/embed/wNXusZJAK7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p style="margin-top: 15px;">這種現象的根源在於晶體的<strong>各向異性(Anisotropy)</strong>，意味著晶體的物理性質（例如折射率）會隨著方向不同而改變。一般的玻璃或水是<strong>各向同性(Isotropic)</strong>，光在其中傳播時，所有方向的折射率都相同。</p>
                <img src="https://hackmd.io/_uploads/SJZC_u2Cex.jpg" alt="Isotropic vs Anisotropic">
                <img src="https://hackmd.io/_uploads/S1vCP9nRxe.jpg" alt="Isotropic vs Anisotropic 2">
            </section>

            <section class="learning-module">
                <img src="https://hackmd.io/_uploads/ry9WetiAxg.png" alt="Optical axis diagram" style="width: 60%;">
                <p><strong>晶體的光軸(opical axis)</strong></p>
                <p>光軸定義:當光在晶體內沿某個特殊方向傳播時不發生雙折射，該方向稱爲晶體的光軸。<em><small>注：光軸是一特殊的方向，凡平行于此方向的直線均爲光軸。</small></em></p>
                <p>根據光軸的數量，晶體可被分為<br>
                <strong>單軸晶體：</strong> 只有一個光軸的晶體(如方解石、石英)<br>
                <strong>雙軸晶體：</strong> 有兩個光軸的晶體(如:雲母)<br>
                由於單軸晶體在光學應用中更為普遍，我們通常討論單軸晶體</p>
            </section>

            <section class="learning-module">
                <img src="https://hackmd.io/_uploads/BkORZYs0xl.png" alt="O-ray and E-ray" style="width: 80%;">
                <p>這兩束光線被賦予了特定的名稱：尋常光 o光(ordinary ray) 與 非尋常光 e光(extra-ordinary ray)。它們之間存在著根本性的差異：</p>
                <ul>
                    <li><strong>折射行為：</strong> 
                        <ul style="padding-left: 20px;">
                            <li>o光完全遵守我們所熟知的折射定律（司乃耳定律）</li>
                            <li>e光的行為則更為複雜，通常不遵循折射定律。</li>
                        </ul>
                    </li>
                    <li><strong>偏振狀態：</strong>這兩束分裂出來的光線是高度純淨的線偏振光。</li>
                    <li><strong>振動方向：</strong>o光與e光的偏振振動方向總是相互垂直。
                        <ul style="padding-left: 20px;">
                            <li>更精確地說，o光的電場向量振動方向垂直於由光軸和o光所構成的主平面；而e光的電場向量則在由光軸和e光構成的主平面內振動。</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section class="learning-module">
                <p>在單軸晶體(uniaxial crystal)的光學研究中，主平面（principle plane)和主截面(principle section)是描述光在晶體內部如何傳播的概念。這些概念主要與光的雙折射現象以及光的偏振有關。</p>
                
                <p><strong>主平面(Principle Plane)：</strong></p>
                <p>主平面是包含<strong>光軸(optical axis)和光線傳播方向的平面</strong></p>
                <ul>
                    <li>o光主平面:o光光線與晶體光軸組成的面為o光主平面。</li>
                    <li>e光主平面:e光光線與晶體光軸組成的面為e光主平面。</li>
                    <li>主平面通常用來分析光線在晶體內部的折射行為，特別是在光線傳播時，如何分裂成兩條不同折射率的光線——普通光線(ordinary ray)和非常光線(extraordinary ray)。</li>
                </ul>
                <img src="https://hackmd.io/_uploads/rkACVFs0xe.png" alt="Principle Plane" style="width: 80%;">
                
                <p style="margin-top: 20px;"><strong>主截面（Principle Section）：</strong></p>
                <ul>
                    <li>主截面是包含<strong>光軸與晶體平面法線(normal line)組成</strong>，即主截面是<em><small>包含光軸的橫截面</small></em>。</li>
                    <li>這個平面通常用來研究在該方向上光線如何傳播並與晶體的各種物理特性相互作用。</li>
                    <li>光在這個平面內的傳播與光的折射、散射、反射等現象密切相關。</li>
                </ul>
                <img src="https://hackmd.io/_uploads/BkgUrts0ll.png" alt="Principle Section" style="width: 80%;">
                <img src="https://hackmd.io/_uploads/HJ8yqwNyZe.jpg" alt="Principle Section 2">
                
                <p>當入射光在主截面內時，o光、e光主平面均爲主截面。o光、e光的光向量互相垂直。
                光線入射晶體通常o光和e光主平面是不共面的，一般選取入射面與主截面重合的實用情况討論。</p>
                <p>在單軸晶體中，主截面對理解光線如何進入和穿過晶體，尤其是在不同方向上的折射率如何變化（例如普通折射率和非常折射率之間的差異）具有重要意義。</p>
            </section>

            <section class="learning-module">
                <p>根據光軸的數量，晶體可被分為單軸晶體（如方解石、石英，具有一個光軸）與雙軸晶體（具有兩個光軸）。由於單軸晶體在光學應用中更為普遍，我們定義了兩個主折射率：</p>
                <ol>
                    <li><strong>尋常光折射率 (nₒ):</strong> 這是一個恆定的值，對應<strong>o光的折射率，不隨方向改變</strong>。</li>
                    <li><strong>非尋常光折射率 (nₑ):</strong> 這是一個主折射率值。
                        <ul style="padding-left: 20px;">
                            <li>e光所實際經歷的有效折射率 nₑ(θ) 是變化的，其值介於 nₑ 和 nₒ 之間，取決於其傳播方向與光軸的夾角 θ。</li>
                            <li>當光垂直於光軸傳播時，e光經歷的折射率為 nₑ；</li>
                            <li>當光平行於光軸傳播時，其經歷的折射率則變為 nₒ。</li>
                        </ul>
                    </li>
                    <li>正是o光與e光在折射率上的差異，以及它們相互垂直的偏振特性，為我們設計功能強大的偏振光學元件提供了物理基礎。</li>
                </ol>
                <img src="https://hackmd.io/_uploads/HkvKLO3Alx.jpg" alt="Refractive indices">
            </section>
            
            <section class="learning-module">
                <h2>雙折射偏光片</h2>
                <p>利用雙折射效應製作偏光片是常見的高效能偏振光學元件設計，主要透過雙折射晶體（如方解石, \\(\\text{Calcite}\\)）中尋常光（o-ray）和非常光（e-ray）具有不同折射率的特性來分離或移除其中一個偏振分量。</p>
                <p>以下說明幾種利用雙折射原理製作偏光片的主要設計及其原理：</p>
                
                <h4>1. Glan–Foucault/Glan-Thompson 偏光鏡</h4>
                <p><strong>設計與結構：</strong><br>
                此類偏光鏡由兩塊最高光學級別的方解石棱鏡組成，兩個直角方解石稜柱體如用氣隙間隔則稱為Glan-Foucault偏光鏡。如果是被<strong>膠合</strong> (Cemented)在一起則稱為Glan-Thompson 偏光鏡。</p>
                <img src="https://hackmd.io/_uploads/S1nWglCAgl.png" alt="Glan-Thompson">
                <p><strong>工作原理：</strong></p>
                <ol>
                    <li>入射的非偏振光進入棱鏡，在兩個晶體的介面處分裂。</li>
                    <li>方解石的雙折射特性導致其中一種偏振態（o-ray）被選擇性地反射和吸收，而另一種偏振態（e-ray）則被傳輸。</li>
                    <li>尋常光 (o-ray) 在每個介面被反射，隨後被<strong>散射並部分被棱鏡外殼吸收</strong>。</li>
                    <li>非常光 (e-ray) 則徑直穿過棱鏡，提供偏振輸出。</li>
                </ol>
                <p><strong>輸出特性與優缺點：</strong></p>
                <ul>
                    <li>Glan-Thompson 偏光片在保持高消光比（例如 \\(100,000:1\\)）的同時，提供了<strong>最寬的視場角</strong> (Field of View, FOV)，典型值約 \\(40^\\circ\\)。相比之下，Glan-Foucault 的視場角約 \\(10^\\circ\\)。</li>
                    <li>由於使用了<strong>膠合介面</strong>，其最大光強度受到限制。因此，對於高功率應用，通常建議使用 Glan-Laser 偏光片。</li>
                </ul>

                <h4 style="margin-top: 20px;">2. Glan-Taylor 偏光片 (Glan-Taylor Calcite Polarizers)</h4>
                <p><strong>設計與結構：</strong><br>
                Glan-Taylor 偏光片採用 <strong>Glan-Taylor 設計</strong>，由兩個雙折射晶體（通常是<strong>方解石</strong>）棱鏡組成，棱鏡間設有**氣隙** (Air-Spaced)。棱鏡的介面角 (interface angle) 設定接近<strong>非常光折射率的布魯斯特角</strong> (\\(38^\\circ\\))。</p>
                <img src="https://hackmd.io/_uploads/H1FgZg00ex.png" alt="Glan-Taylor">
                <p><strong>工作原理：</strong><br>
                此偏光片的作用是移除光束中被反射的尋常偏振分量（o-ray）。</p>
                <ol>
                    <li>當非偏振光射入時，由於方解石的雙折射特性，光束會分離成尋常光 (o-ray) 和非常光 (e-ray)。</li>
                    <li>這些棱鏡的設計使得入射光的**尋常偏振分量** (o-ray) 在內部晶體與氣隙的介面上發生**全內反射** (Total Internal Reflection, TIR)。</li>
                    <li>尋常光（o-ray）被反射後，會從棱鏡側面的**側埠** (side port) 射出。</li>
                    <li>**非常偏振分量** (e-ray) 則會**穿過氣隙**，並從輸出面射出。</li>
                </ol>
                <p><strong>輸出特性：</strong></p>
                <ul>
                    <li><strong>輸出光束</strong>（穿透的 e-ray）具有**極高的線性偏振純度**，例如消光比 (Extinction Ratio) 可達 \\(100,000:1\\)。</li>
                    <li><strong>反射光束</strong>（側埠射出的 o-ray）則**不是完全偏振**的，因此不應用於要求高純度偏振的應用中。</li>
                    <li>Glan-Taylor 棱鏡通常用於波長範圍 \\(350 \\text{ nm} - 2.3 \\mu \\text{m}\\) 的雷射光束。</li>
                </ul>
                <p><strong>Glan-Laser 偏光片：</strong><br>
                Glan-Laser 偏光片是 Glan-Taylor 類型的變體，主要由**低散射的天然方解石**製成，並採用高雷射損傷閾值的氣隙設計。它們專為**高功率應用**而設計。!</p>

                <h4 style="margin-top: 20px;">3. Wollaston 棱鏡</h4>
                <p><strong>設計與結構：</strong><br>
                Wollaston 棱鏡是一種**偏振分束器** (Polarizing Beamsplitter)。它由兩塊光軸**彼此正交的棱鏡組成**（例如方解石、石英、\\(\\alpha\\)-BBO 等），它們被**膠合**或**光學接觸** (optically contacted) 在一起。</p>
                <img src="https://hackmd.io/_uploads/HJwuZeCAxx.png" alt="Wollaston Prism">
                <p><strong>工作原理：</strong></p>
                <ol>
                    <li>Wollaston 棱鏡的設計使其**穿透兩個正交偏振分量**，而不是僅移除一個分量。</li>
                    <li>由於雙折射，當非偏振光（通常是垂直入射）射入時，它在棱鏡內部的介面處，尋常光 (o-ray) 會變成非常光 (e-ray)，反之亦然。</li>
                    <li>這種光軸的轉變導致兩個正交偏振態在離開棱鏡時，**以不同的角度射出**。</li>
                </ol>
                <p><strong>輸出特性：</strong></p>
                <ul>
                    <li>它將非偏振入射光分成**兩個正交偏振的輸出光束**。</li>
                    <li>兩個輸出光束之間的**分離角** (Separation Angle) 可以很小（如 \\(1^\\circ\\) 或 \\(1^\\circ 20'\\)）或很大（如 \\(20^\\circ\\)）。此分離角取決於棱鏡的楔角和波長。</li>
                    <li>Wollaston 棱鏡的兩個輸出光束均具有**高偏振純度**，例如方解石、\\(\\alpha\\)-BBO 和 \\(\\text{YVO}_4\\) 棱鏡的消光比可達 \\(100,000:1\\)。</li>
                </ul>
                
                <h4 style="margin-top: 20px;">4. Nicol 棱鏡</h4>
                <p>Nicol 棱鏡是早期著名的雙折射偏光片。<br>
                <strong>設計與原理：</strong><br>
                它由一塊方解石菱面體斜切後，用**加拿大樹膠** (Canada balsam, 折射率約 \\(1.55\\)) 膠合而成。其原理是利用尋常光 (o-ray) 在方解石-樹膠介面處發生**全內反射**並被吸收，而非常光 (e-ray) 則穿透介面射出。由於它的入射角範圍較窄，且出射光有側向位移，它已被 Glan-Taylor 等更有效的偏光片取代。</p>
                <img src="https://hackmd.io/_uploads/B1EDzOVJ-g.png" alt="Nicol Prism">
            </section>
        `,
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    "appendix-scattering": {
        html: `
            <h1 class="chapter-title">附錄：8.5 散射與偏振 (Scattering and Polarization)</h1>
            
            <section class="learning-module">
                <h2>8.5.1 現象定義：光的散射使天空偏振</h2>
                <p><strong>定義</strong>：當太陽光穿過大氣層時，空氣分子會使來自太陽的光向各方向散射，其中藍光（高頻成分）散射最強，使天空呈現藍色，且部分天空光具有偏振性。</p>
                <img src="https://hackmd.io/_uploads/By-Yt_EJbx.png" alt="Scattering of light in the atmosphere">
            </section>
            
            <section class="learning-module">
                <h2>8.5.2 原理說明</h2>
                <p><strong>散射偏振原理</strong>：</p>
                <ul>
                    <li>若線性偏振的光波入射至空氣分子，分子因感受到垂直於入射方向的電場而振動並產生輻射，僅在垂直於振動軸的方向有輻射。</li>
                    <li>若入射光為非偏振，則可視為由兩個正交、非相干的狀態組成，散射後的光在前向完全非偏振，而越偏離原軸則偏振度越高。</li>
                    <li>在觀察方向與初始入射光垂直時，散射光將是完全線性偏振。</li>
                </ul>
                <img src="https://hackmd.io/_uploads/HkYoKuEyWg.png" alt="Scattering polarization mechanism">
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://www.youtube.com/embed/TP5JOfrPguQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-container" style="margin-top: 15px;">
                    <iframe src="https://www.youtube.com/embed/IEbUNZXiPY8?start=496" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            
            <section class="learning-module">
                <h2>8.5.3 公式整理</h2>
                <p><strong>偏振光散射公式與示意</strong>：</p>
                <ul>
                    <li>偏振方向依循偶極輻射模式（散射光的電場、波向量、偶極方向共面）。</li>
                    <li>由斯涅耳定律與布魯斯特定律可推得偏振角公式：
                        $$ \tan \theta_p = \frac{n_t}{n_i} $$
                        其中 \\(\\theta_p\\) 為偏振角，\\(n_i\\) 是入射介質的折射率，\\(n_t\\) 是透射介質的折射率。
                    </li>
                    <li>於玻璃 \\(n_t = 1.5\\) 時偏振角約為 \\(56^\circ\\)</li>
                    <li>照射於水面 \\(n_t = 1.33\\) 時偏振角約為 \\(53^\circ\\)。</li>
                </ul>

                <p style="margin-top: 15px;"><strong>反射光反偏振公式（來自 Fresnel 方程）</strong>：</p>
                <ul>
                    <li>垂直入射面的分量反射率：
                        $$ R_{\perp} = \left( \frac{\sin(\theta_i - \theta_t)}{\sin(\theta_i + \theta_t)} \right)^2 $$
                    </li>
                    <li>平行入射面的分量反射率：
                        $$ R_{\parallel} = \left( \frac{\tan(\theta_i - \theta_t)}{\tan(\theta_i + \theta_t)} \right)^2 $$
                    </li>
                    <li>自然光總反射率（等幅正交成分）：
                        $$ R = \frac{1}{2} (R_{\parallel} + R_{\perp}) $$
                    </li>
                </ul>

                <p style="margin-top: 15px;"><strong>偏振度定義</strong>：</p>
                <p>\\( V = \frac{I_p}{I_p + I_n} \\)<br>
                其中 \\(I_p\\) 為偏振光強度，\\(I_n\\) 為非偏振光強度；或，
                $$ V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} $$
                以分析儀旋轉取波最大、最小強度計算。</p>
            </section>

            <section class="learning-module">
                <h2>8.5.4 分類表格</h2>
                <table style="width:100%; border-collapse: collapse; text-align: left;">
                    <thead style="background-color: #f0f0f0;">
                        <tr>
                            <th style="padding: 8px; border: 1px solid #ddd;">實例</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">顆粒相對波長</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">散射特性</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">觀察顏色/效果</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">空氣分子（藍天）</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">明顯小於波長</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">強烈偏藍</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">天空藍色、部分偏振光</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">細懸煙或霧（一氧化碳細粒子）</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">小於波長</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">偏藍</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">藍色色煙</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">大水滴、紙、雲</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">大於波長</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">白色</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">反射多次，光混合成白色</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">火山灰散佈</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">近似或略大於波長</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">色彩多變</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">可致色彩強烈日落現象</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="learning-module">
                <h2>8.5.5 現象解釋</h2>
                
                <h4>(一) 天空偏振現象</h4>
                <ul>
                    <li><strong>定義</strong>：太陽光在大氣中散射後，除前向光外其他方向出現偏振現象。</li>
                    <li><strong>原理</strong>：偶極輻射模式下，垂直於入射光方向可產生偏振散射，偏振度隨觀察角度增大而增強。</li>
                    <li><strong>公式</strong>：偏振角 \\( \tan \theta_p = n_t/n_i \\)，最大偏振發生於入射角等於偏振角時。</li>
                    <li><strong>應用範例</strong>：用偏光片檢查天空、拍攝極化日落照片、防止鏡面反射眩光。</li>
                </ul>

                <h4 style="margin-top: 15px;">(二) 粒子大小對散射顏色與偏振的影響</h4>
                <ul>
                    <li><strong>定義</strong>：粒子大小影響散射光的色彩與偏振特性。</li>
                    <li><strong>原理</strong>：Rayleigh 散射適用於粒子小於波長，偏向高頻（藍）散射較強；大於波長則反射和折射多次，光混合呈白色。</li>
                    <li><strong>公式</strong>：不需專用公式，主要比對粒子尺寸與波長關係。</li>
                    <li><strong>應用範例</strong>：煙霧呈藍色，雲/霧/紙/鹽糖等呈白色。</li>
                </ul>

                <h4 style="margin-top: 15px;">(三) 多重散射與去偏振現象</h4>
                <ul>
                    <li><strong>定義</strong>：經多層物質（如蠟紙）多次散射後，偏振度降低。</li>
                    <li><strong>原理</strong>：各振盪子受到非相關電場的超疊，導致發射近乎完全去偏振。</li>
                    <li><strong>公式</strong>：偏振度 V 值弱化，「V=0」為完全未偏振，「V=1」為全偏振。</li>
                    <li><strong>應用範例</strong>：蠟紙疊放於交叉偏振片間，光幾乎完全去偏振。</li>
                </ul>
            </section>

            <section class="learning-module">
                <h2>8.5.6 應用範例</h2>
                <ul>
                    <li>用偏光片觀察天空，不同角度可驗證偏振現象。</li>
                    <li>把蠟紙置於交叉偏振片間看去偏振效果。</li>
                    <li>玻璃、池水表面根據入射角產生「布魯斯特偏振角」現象，用於去除眩光或製作各波段極化元件。</li>
                    <li>火山爆發、高空灰塵對大氣色彩偏振造成巨大影響。</li>
                </ul>
            </section>
        `,
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    "appendix-reflection": {
        html: `
            <h1 class="chapter-title">附錄：8.6 反射產生的偏振 (Polarization by Reflection)</h1>
            
            <section class="learning-module">
                <h2>一、現象定義</h2>
                <p>反射偏振是指未偏振或部分偏振的光投射到介質表面時，反射光和透射光會呈現不同的偏振狀態。最常見於窗戶、紙張、水面等介質，以及多種日常「眩光」現象。</p>
            </section>
            
            <section class="learning-module">
                <h2>二、物理原理</h2>
                <ul>
                    <li>當光入射至介電體介面（如空氣-玻璃、水面），部分光會反射且發生偏振作用。</li>
                    <li>當入射角等於特定的「偏振角」（Brewster’s Angle）時，反射光完全呈現偏振狀態（電場向表面方向），而透射光則部分偏振。</li>
                    <li>偏振角由幾何關係決定：入射波和折射波夾角為90°時，反射光消失，只剩垂直於入射面分量。</li>
                    <li>早在1808年 Étienne Malus 實驗觀察太陽在水面、窗戶上的反射像時發現此現象，後由Brewster實驗量測到數值關係。</li>
                </ul>
                <img src="https://hackmd.io/_uploads/rkSTlYEJ-e.png" alt="Brewster's Angle Diagram">
                <p style="margin-top: 15px;"><strong>圖8.38的意義是說明「光在介質表面反射和折射時的偏振現象，以及 Brewster角如何決定反射光是否完全偏振」。</strong></p>
                <ul>
                    <li><strong>(a) 幾何與波動結構:</strong> 展現光波（入射光）撞擊介質（如玻璃、空氣、海水）介面，部分進入介質（折射），部分反射。</li>
                    <li><strong>(b) 電子振盪器模型:</strong> 突顯界面上電子受到入射光影響開始振盪，電子振盪方向對反射光的偏振性產生決定作用。顯示只有垂直於入射面（即平行於界面）的電場分量能成為完全偏振反射光，這正好發生在 Brewster角。</li>
                    <li><strong>(c) 極化與輻射模式:</strong> 當光以 Brewster角入射，反射光只剩下垂直於入射面（平行於介面）那一分量（完全偏振），其餘分量被介質吸收或折射走。</li>
                    <li><strong>(d) 光學現象總結:</strong> 兼論在 Brewster角時，反射光呈現強偏振，折射光則偏振度降低，呈現部分偏振。實驗上常用於消除水面眩光、判定偏光器方向等。</li>
                </ul>
            </section>

            <section class="learning-module">
                <h2>8.6.1 費涅耳方程式的應用（Fresnel Equations）</h2>
                
                <h4>一、主題定義</h4>
                <p>本節說明入射電磁波經由介質界面反射與透射時的<strong>偏振現象</strong>，特別聚焦於用「費涅耳方程式」計算不同偏振方向下的反射率與透射率，以及未偏振光在介質界面的能量分布。</p>
                
                <h4 style="margin-top: 15px;">二、物理原理</h4>
                <ul>
                    <li><strong>費涅耳方程式</strong>描述了入射波（平行與垂直偏振）在界面上的反射和透射幅值。</li>
                    <li>若<strong>入射電場平行於入射面</strong>，反射幅比為 \\(r_\\parallel\\)，垂直則為 \\(r_\\perp\\)，反射率分別為 \\(R_\\parallel\\) 和 \\(R_\\perp\\)。</li>
                    <li>反射率公式：
                        <ul style="padding-left: 20px;">
                            <li>平行偏振： $$ R_\\parallel = \\tan^2(\\theta_i - \\theta_t) / \\tan^2(\\theta_i + \\theta_t) $$</li>
                            <li>垂直偏振： $$ R_\\perp = \\sin^2(\\theta_i - \\theta_t) / \\sin^2(\\theta_i + \\theta_t) $$</li>
                        </ul>
                    </li>
                    <li>只有垂直分量的反射率永遠不為零；平行分量在<strong>偏振角</strong>(Brewster angle)時反射率歸零。</li>
                    <li>對未偏振入射光，總反射率為：
                        $$ R = \\frac{1}{2}(R_\\parallel + R_\\perp) $$
                    </li>
                    <li>偏振角（或Brewster角）定義為 $$ \\theta_i + \\theta_t = 90^\\circ $$，此時平行分量全被折射，反射光完全偏振。</li>
                </ul>
                
                <h4 style="margin-top: 15px;">實例計算</h4>
                <ul>
                    <li>例題：200 W/m² 自然光垂直於玻璃表面入射於偏振角，界面總透射率 92.5%，求反射偏振光能量。</li>
                    <li>平行分量全被折射，垂直分量仍有 15% 被反射。</li>
                    <li>總反射率：7.5%，故反射功率 = 15 W/m²。</li>
                    <li>凸顯自然界大多界面反射光都帶部分偏振。</li>
                </ul>
            </section>

            <section class="learning-module">
                <h2>四、偏振度公式</h2>
                <p><strong>偏振度</strong> \\(V\\) 是偏振光能量佔總能量的比例：
                $$ V = \\frac{I_{p}}{I_{p} + I_{n}} $$
                或
                $$ V = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}} $$
                </p>
            </section>
            
            <section class="learning-module">
                <h2>五、重要現象解釋</h2>
                <ul>
                    <li><strong>反射偏振現象</strong>：在Brewster角入射時，反射光完全偏振，且方向平行於介面；未偏振光會因介面產生部分偏振。</li>
                    <li><strong>生活應用</strong>：偏光鏡及疊板型偏光器原理，消除水面或玻璃表面眩光、攝影或光學檢測均有用途。</li>
                </ul>
            </section>

            <section class="learning-module">
                <h2>六、圖示輔助</h2>
                <p><strong>圖8.39 疊板型偏光器（pile-of-plates polarizer）</strong></p>
                <p>這是 Dominique F. J. Arago 在1812年發明的偏光器構造，通常由多層玻璃片、銀氯片或石英片疊合而成。 利用每一層玻璃片在特定入射角（接近 Brewster角）時，反射出完全偏振光，並讓部分光穿透形成部分偏振透射光。疊板型偏光器可以有效將未偏振光分離，反射出平行界面的偏振分量，疊加多層後提高偏振效果。</p>
                <p><strong>應用：</strong>可自製簡易偏光器（疊合顯微鏡載玻片），並用於可見光、紅外或紫外波段的偏光應用與教學。</p>
                <img src="https://hackmd.io/_uploads/BJCoVYNkWl.png" alt="Pile-of-plates polarizer">

                <p style="margin-top: 20px;"><strong>圖8.40 分光方塊型偏光器（beamsplitter cube polarizer）</strong></p>
                <p>這類偏光器結構是將兩個稜鏡合成，對角面鍍有多層透明介質薄膜。入射未偏振光撞擊方塊對角面時，利用多層膜的反射與透射特性，分離出互相垂直的兩個偏振分量：一束被反射、一束被透射，各自呈線性偏振且偏振方向相差90°。適用於雷射分光、高能量雷射應用，具備高損傷閾值與低波前失真。</p>
                <p><strong>應用：</strong>常用於雷射設備、光束分離器、高精度偏振控制裝</p>
                <img src="https://hackmd.io/_uploads/SyoxHFV1Zl.png" alt="Beamsplitter cube polarizer">

                <p style="margin-top: 20px;"><strong>圖 8.41展現反射率隨入射角變化，Brewster角時總反射率最低。</strong></p>
                <img src="https://hackmd.io/_uploads/S1rqXYEyWg.png" alt="Reflectance vs Angle of Incidence">
            </section>
        `,
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    "appendix-retarders": {
        html: `
            <h1 class="chapter-title">附錄：8.7 遲滯器 (Retarders)</h1>

            <section class="learning-module">
                <h2>8.7.1 遲滯器概述與基本原理</h2>
                <h4><strong>定義</strong></h4>
                <p>遲滯器(或稱 波片 補波片)是一類光學元件，<strong>用於改變入射波的偏振狀態</strong>。在原理上，遲滯器的運作相當簡單：使兩個相干的偏振態分量之一的相位滯後於另一個預定的量。</p>
                
                <h4><strong>原理</strong></h4>
                <ul>
                    <li>雙折射現象是波片產生相位延遲效果的物理基礎。當偏振光進入具有雙折射特性的晶體（如石英、方解石）時，光會分裂為兩束正交偏振分量：尋常光（o光）和非尋常光（e光）。這兩束光在晶體中的折射率不同，因此它們的傳播速度也不同。</li>
                    <li>由於這個速度差異，o光和e光從波片出射時會產生路徑差，進而造成相位延遲。這個相位差\\(\\delta\\)的大小取決於材料的折射率差(n<sub>o</sub>和n<sub>e</sub>)、波片的厚度d以及入射光的波長\\(\\lambda\\)。</li>
                    <li>當光波從遲滯器出射時，<strong>兩個分量的相對相位與初始狀態不同，因此偏振狀態也隨之改變</strong>。遲滯器實際上是一個「相對相位移位器」，它使兩個正交電場分量之一的相位前進或滯後某個所需的量。</li>
                </ul>

                <img src="https://hackmd.io/_uploads/ByV6tYVybg.png" alt="Polarization states cycle">
                <p style="margin-top: 15px;">圖8.42展示的是<strong>當E<sub>x</sub>相對於E<sub>y</sub>領先或滯後不同相位時，波的偏振狀態的循環變化。</strong></p>
                
                <h4>（1）<strong>各種偏振狀態的關係</strong></h4>
                <ul>
                    <li>E<sub>x</sub>領先或是滯後E<sub>y</sub>相位量時，對應不同的偏振狀態。(內圈是領先、外圈是滯後的數值)</li>
                    <li>圖中呈現各種主要偏振態（線偏振、左旋圓偏振、右旋圓偏振、橢圓偏振）以及其相位差標記（如0、\\(\\frac{\\pi}{4}\\)、\\(\\frac{\\pi}{2}\\)、\\(\\pi\\)、\\(\\frac{5\\pi}{4}\\)、\\(2\\pi\\)等）。</li>
                    <li>相位差（Retardance）：\\(\\delta = \\Delta\\omega = \\text{E}_x \\text{ 領先 E}_y \\text{ 的相位}\\)</li>
                </ul>

                <h4>（2）<strong>相位延遲的循環性</strong></h4>
                <ul>
                    <li>這個序列是<strong>無窮循環的</strong>：每引入\\(\\frac{\\pi}{4}\\)相位延遲，偏振狀態就順時針變化一格；逆時針移動則是每次減少\\(\\frac{\\pi}{4}\\)。八次變化（\\(8 \\times \\frac{\\pi}{4} = 2\\pi\\)）回到原狀。</li>
                    <li><strong>實際意義</strong>：每個偏振狀態都可以透過特定相位延遲轉換到下一個狀態，波片或遲滯器就是實現這個遞進的物理元件。</li>
                </ul>

                <h4>（3）<strong>波片的功能直觀化</strong></h4>
                <ul>
                    <li>"快軸"和"慢軸"控制哪個場分量被相移，決定偏振狀態如何遞進。</li>
                    <li>只要選好快軸與光的偏振方向，施加適當相位差（如\\(\\frac{\\pi}{4}\\)、\\(\\frac{\\pi}{2}\\)、\\(\\pi \\)……）即可實現線偏振、圓偏振、橢圓偏振的各種轉換。</li>
                </ul>

                <table style="width: 60%; margin: 15px auto; border-collapse: collapse; text-align: center;">
                    <thead style="background-color: #f0f0f0;">
                        <tr>
                            <th style="padding: 8px; border: 1px solid #ddd;">相位差</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">偏振狀態</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">0</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">線偏振（夾角0°）</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\frac{\\pi}{4}\\)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">左橢圓偏振</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\frac{\\pi}{2}\\)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">左旋圓偏振</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\pi\\)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">線偏振（垂直方向）</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\frac{3\\pi}{2}\\)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">右旋圓偏振</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(2\\pi\\)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">線偏振（回到初始）</td>
                        </tr>
                    </tbody>
                </table>
                
                <p><strong>應用範例：</strong></p>
                <ul>
                    <li>設計不同相位延遲的波片，可將任意一種偏振態轉換為另一種（如線→圓、圓→橢圓）。</li>
                    <li>偏振控制實驗與成像系統設計。</li>
                    <li>依序累加相位延遲，可實現多種偏振態連續調控；常見於光通訊、顯示技術、分光儀等領域。</li>
                </ul>

                <h4 style="margin-top: 20px;"><strong>核心公式</strong></h4>
                <p><strong>相對光程差：</strong></p>
                <ul>
                    <li>當平面單色光入射到具有雙折射性的晶體（如方解石、石英、雲母）時，根據電場方向可分解為尋常光(Ordinary wave)和非常光(Extraordinary wave)兩分量。</li>
                    <li>這兩個分量因為折射率不同，以不同速度穿越材料、會產生不同光程\\(\\Lambda\\)(Optical Path)。</li>
                </ul>
                $$ \\Lambda = d|n_o - n_e| $$
                <p><strong>相位差（弧度）：</strong></p>
                $$ \\Delta\\omega = \\frac{2\\pi}{\\lambda_0} d|n_o - n_e| $$
                <p>其中：<br>
                - \\(d\\) = 板厚<br>
                - \\(n_o, n_e\\) = 尋常光和非常光折射率<br>
                - \\(\\lambda_0\\) = 真空中波長</p>
                <p>一旦建立了遲滯器的概念，就可以將任何偏振狀態轉換為任何其他偏振狀態，並創建<strong>圓偏振片</strong>和<strong>橢圓偏振片</strong>。</p>
            </section>

            <section class="learning-module">
                <h2>8.7.2 波板與菱形 (Wave Plates and Rhombs)</h2>
                <img src="https://hackmd.io/_uploads/SkrUG9EkWe.png" alt="Wave plate diagrams">
                <ul>
                    <li>圖8.43顯示「方解石平板切面垂直於光軸」時（光軸垂直於出入表面），
                        <ul>
                            <li>當單色平面波正入射，電場 \\(\\vec{E}\\) 只能垂直於光軸分量傳播。</li>
                            <li>在這種結構下，「在圖面內」的電場分量（非常光）會在結晶內以橢圓波前形式擴展，並在所有方向都有不同的擴展速度（形成立體橢圓）；「垂直圖面」的分量（尋常光）則會以球形波前等速擴展。</li>
                            <li><strong>兩種次級波（o波與e波），在光軸方向上切點相切，形成一致的「包絡面」，o波與e波的包絡面重合</strong>，出射為「單一、不偏折」的平面波。即：<strong>無光程差、無雙重影像、也無相對相位延遲現象</strong>。</li>
                        </ul>
                    </li>
                    <li style="margin-top: 10px;">圖8.44顯示「光軸平行於平板表面」的方解石平板。
                        <ul>
                            <li>若入射光為單色波，其電場可分為「平行光軸」和「垂直光軸」兩分量。</li>
                            <li>這兩分量在晶體內各自以不同的速度—\\(v_o\\), \\(v_e\\)（分別受\\(n_o\\), \\(n_e\\)支配）分別前進。</li>
                            <li>當光穿透厚度\\(d\\)後，「o波」和「e波」總會累積出一個<strong>相對光程差</strong>。</li>
                            <li>出射後的波是「o波與e波」的疊加，現在具有一個明顯的<strong>相對相位差\\(\\omega\\)</strong>，計算公式為
                            \\(\\omega = \\frac{2\\pi}{\\lambda_0} d (n_o - n_e)\\)，其中\\(\\lambda_0\\)是真空波長。</li>
                            <li><strong>偏振型態因o波、e波分量的幅度與相位差而定，這是設計各類波片/遲滯器的基礎原理。</strong></li>
                            <li>這種幾何結構就會使方解石平板具備雙折射現象，「雙影」「偏振改變」和「相位延遲」皆由此而來。</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>結論比較</h4>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background-color: #f0f0f0;">
                        <tr>
                            <th style="padding: 8px; border: 1px solid #ddd;">圖號</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">切面與光軸</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">主要現象</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">出射波/影像</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">應用意義</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">圖8.43</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">光軸⊥平板</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">無光程差、無相對相位差</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">單一影像</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">雙影消失，僅作通光窗口</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;">圖8.44</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">光軸∥平板</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">兩分量累積光程差→相對相位延遲</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">偏振改變、可能雙影</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">波片/遲滯器設計基礎</td>
                        </tr>
                    </tbody>
                </table>
                
                <h4 style="margin-top: 20px;">1. <strong>全波板 (Full-Wave Plate)</strong></h4>
                <p><strong>定義:</strong> 當相對遲滯 \\(\\Delta\\omega = 2\\pi\\) 時，相對遲滯為一個波長，此時 e 波和 o 波重新同相，對入射單色光束的偏振沒有可觀察到的影響。</p>
                <p><strong>原理:</strong> 全波板只能在特定波長下以討論的方式工作，因此這類遲滯器被稱為<strong>色散型</strong>。</p>
                <p><strong>公式:</strong> \\(\\Delta\\omega = 2\\pi\\)</p>
                <p><strong>應用範例:</strong></p>
                <ul>
                    <li>消除光學系統中光線通過時的偶然偏振狀態變化</li>
                    <li>製作窄波長濾光片</li>
                    <li>校正金屬表面反射鏡引入的相位移位</li>
                </ul>

                <h4 style="margin-top: 20px;">2. <strong>半波板 (Half-Wave Plate)</strong></h4>
                <p><strong>定義:</strong> 引入 \\(\\pi\\) 弧度（或180°）相對相位差的遲滯板稱為半波板或半波遲滯器。</p>
                <p><strong>原理:</strong> 半波板可以將線偏振光的偏振面旋轉 \\(2\\theta\\) 角，其中 \\(\\theta\\) 是入射光與快軸的夾角。<strong>它會反轉圓偏振光或橢圓偏振光的手性</strong>。</p>
                <p><strong>公式 (厚度條件):</strong> \\( d|n_o - n_e| = (2m + 1)\\frac{\\lambda_0}{2} \\) 其中 \\(m = 0, 1, 2, \\ldots\\)</p>
                <img src="https://hackmd.io/_uploads/Bk_hzcNy-e.png" alt="Half-wave plate 1">
                <img src="https://hackmd.io/_uploads/ryHCfqNyWl.png" alt="Half-wave plate 2">
                <p><strong>應用範例:</strong></p>
                <ul>
                    <li>偏振旋轉器</li>
                    <li>改變圓偏振光的手性（右旋→左旋，反之亦然）</li>
                    <li>使用膠帶製作簡易半波板</li>
                </ul>

                <h4 style="margin-top: 20px;">3. <strong>四分之一波板 (Quarter-Wave Plate)</strong></h4>
                <p><strong>定義:</strong> 引入相對相位移 \\(\\Delta\\omega = \\pi/2\\) 的光學元件，可在正交的 o 波和 e 波分量之間產生90°相位差。</p>
                <p><strong>原理:</strong></p>
                <ul>
                    <li><strong>線偏振→圓偏振：</strong> 45°線偏振光入射時產生圓偏振光</li>
                    <li><strong>圓偏振→線偏振：</strong> 圓偏振光入射時產生線偏振光</li>
                    <li>產生的圓偏振光手性取決於線偏振光旋轉到慢軸的最小角度方向</li>
                </ul>
                <p><strong>公式 (厚度條件):</strong> \\( d|n_o - n_e| = (4m + 1)\\frac{\\lambda_0}{4} \\) 其中 \\(m = 0, 1, 2, \\ldots\\)</p>
                <img src="https://hackmd.io/_uploads/BkCgmcE1-l.png" alt="Quarter-wave plate">
                <p><strong>應用範例:</strong></p>
                <ul>
                    <li>製作圓偏振器的關鍵元件</li>
                    <li>使用保鮮膜疊層製作簡易四分之一波板</li>
                    <li>光學檢測和分析系統</li>
                </ul>

                <h4 style="margin-top: 20px;">4. <strong>菲涅耳菱形 (Fresnel Rhomb)</strong></h4>
                <p><strong>定義:</strong> 利用全內反射過程在兩個正交場分量之間引入相對相位差的光學元件。</p>
                <p><strong>原理:</strong> 玻璃中(n = 1.51)在特定入射角54.6°時，內反射伴隨45°相位移。<strong>菲涅耳菱形使光束經歷兩次內反射，總共產生90°相對相位移</strong>。</p>
                <p><strong>公式:</strong> 入射角：\\(\\theta_i = 54.6°\\) （對於 n = 1.51 的玻璃）</p>
                <img src="https://hackmd.io/_uploads/By2c85VJbl.png" alt="Fresnel Rhomb">
                <p><strong>應用範例:</strong></p>
                <ul>
                    <li>本質上是<strong>消色差90°遲滯器</strong></li>
                    <li>兩個菱形端對端組合可在寬波長帶（≈2000 nm）上產生 \\(\\lambda_0/2\\) 遲滯</li>
                </ul>
            </section>

            <section class="learning-module">
                <h2>8.7.3 遲滯器分類表格</h2>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background-color: #f0f0f0;">
                        <tr>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>遲滯器類型</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>相位差 \\(\\Delta\\omega\\)</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>主要功能</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>典型材料</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>應用特色</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>全波板</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(2\\pi\\) (360°)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">無偏振效應（特定波長）</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">石英、雲母</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">濾光器、校正系統</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>半波板</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\pi\\) (180°)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">偏振旋轉2\\(\\theta\\)、手性反轉</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">石英、雲母、賽璐珞膠帶</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">偏振旋轉器</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>四分之一波板</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\pi/2\\) (90°)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">線偏振↔圓偏振轉換</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">石英、雲母、聚合物</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">圓偏振器製作</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>菲涅耳菱形</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">\\(\\pi/2\\) (90°)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">消色差遲滯</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">玻璃 (n=1.51)</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">寬頻段應用</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="learning-module">
                <h2>8.7.4 補償器和可變遲滯器 (Compensators and Variable Retarders)</h2>
                
                <h4>1. <strong>巴比內補償器 (Babinet Compensator)</strong></h4>
                <p><strong>定義:</strong> 能夠對波施加可控遲滯的光學器件，由兩個獨立的方解石或石英楔形組成，其光軸相互垂直。</p>
                <p><strong>原理:</strong> 通過調節兩個楔形的相對位置，可以連續改變相對相位差。光線通過不同位置時遇到不同的楔形厚度組合。</p>
                <p><strong>公式:</strong> \\( \\Delta\\omega = \\frac{2\\pi}{\\lambda_0} (d_1 - d_2)|n_o - n_e| \\) <br>
                其中 \\(d_1, d_2\\) 為上下楔形在該點的厚度</p>
                <img src="https://hackmd.io/_uploads/B1wTL94J-l.png" alt="Babinet Compensator">
                <p><strong>應用範例:</strong></p>
                <ul>
                    <li>未知波板遲滯量的測量</li>
                    <li>在交叉偏振器間產生彩色條紋圖案</li>
                    <li>精密偏振測量</li>
                </ul>

                <h4 style="margin-top: 20px;">2. <strong>索萊伊補償器 (Soleil Compensator)</strong></h4>
                <p><strong>定義:</strong> 巴比內補償器的改良版，由兩個楔形和一個平行平板組成，<strong>產生均勻的遲滯量且無光束偏折</strong>。</p>
                <p><strong>原理:</strong> 通過組合楔形結構，在整個表面產生均勻遲滯，同時消除光束偏折問題。</p>
                <img src="https://hackmd.io/_uploads/rkuJP5VkZx.png" alt="Soleil Compensator">
                <p><strong>應用範例:</strong></p>
                <ul>
                    <li>需要均勻遲滯的精密光學應用</li>
                    <li>紅外光應用（使用MgF₂和CdS材料）</li>
                </ul>
            </section>

            <section class="learning-module">
                <h2>8.7.5 遲滯器材料與製作</h2>
                <h3><strong>常用材料分類</strong></h3>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background-color: #f0f0f0;">
                        <tr>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>材料類型</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>代表材料</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>特性</strong></th>
                            <th style="padding: 8px; border: 1px solid #ddd;"><strong>波段應用</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>晶體材料</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">石英、方解石</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">高精度、穩定</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">可見光</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>層狀礦物</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">雲母（白雲母）</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">易劈裂、大面積</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">可見光</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>聚合物</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">聚乙烯醇</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">可拉伸定向</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">可見光</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>紅外材料</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">MgF₂、CdS</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">透紅外</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">3000-12000 nm</td>
                        </tr>
                    </tbody>
                </table>

                <h4 style="margin-top: 20px;">Multiple-order retarder（多階遲滯器）與 zero-order retarder（零階遲滯器）的差異</h4>
                
                <p><strong>Zero-order retarder（零階遲滯器)</strong></p>
                <ul>
                    <li>指厚度最薄、只產生一次所需相位延遲的波片，例如四分之一波片、半波片。</li>
                    <li>結構公式：只需要達到 \\(\\omega = \\pi/2\\)（QWP）或 \\(\\omega = \\pi\\)（HWP），厚度最小。</li>
                    <li><strong>零階波片（最薄）：</strong>
                        $$ d_{\\text{zero}} = \\frac{(\\text{所需相位差}) \\times \\lambda_0}{2\\pi |n_o - n_e|} $$
                    </li>
                    <li>優點：色散影響最小、視場角大、波長和溫度變化時性能最穩定。</li>
                </ul>

                <p><strong>Multiple-order retarder（多階遲滯器)</strong></p>
                <ul>
                    <li>指歷經多個完整週期（如多個\\(2\\pi\\)）再加上所需相位延遲的波片，即：
                    \\(\\omega = (2m\\pi) + \\text{所需相位差}\\)（m為正整數，大於零）。</li>
                    <li><strong>多階波片：</strong>
                        $$ d_{\\text{multiple}} = \\frac{(2m\\pi + \\text{所需相位差}) \\times \\lambda_0}{2\\pi |n_o - n_e|}, \\quad m > 0 $$
                    </li>
                    <li>板材較厚（多倍波長光程），製作容易、成本低。</li>
                </ul>

                <p><strong>關鍵差異比較</strong></p>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background-color: #f0f0f0;">
                        <tr>
                            <th style="padding: 8px; border: 1px solid #ddd;"></th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Zero-order（零階）</th>
                            <th style="padding: 8px; border: 1px solid #ddd;">Multiple-order（多階）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>結構厚度</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">最薄（單次遲滯）</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">幾倍波長（多次遲滯）</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>色散敏感性</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">最低</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">高：波長變化導致遲滯大幅改變</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>溫度敏感性</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">最低</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">高：溫度改變、遲滯易失準</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>視場角</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">大</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">小</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>成本/製作難度</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">製作難且脆弱，成本高</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">板材厚、製作容易、低成本</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>常見應用</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">精密偏振控制、科研</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">一般量測、成本敏感場域</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>波長適應性</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">適用寬波段</td>
                            <td style="padding: 8px; border: 1px solid #ddd;">通常僅適用單一波長</td>
                        </tr>
                    </tbody>
                </table>

                <p style="margin-top: 15px;"><strong>注意事項</strong></p>
                <ol>
                    <li><strong>選擇依據應用需求：</strong>
                        <ul>
                            <li>精密偏振控制、寬波長需求：選擇零階遲滯器</li>
                            <li>成本考量、不需高穩定性：可選擇多階遲滯器</li>
                        </ul>
                    </li>
                    <li><strong>溫度與波長敏感性：</strong>
                        <ul>
                            <li>多階遲滯器因多個完整週期，波長或溫度略微改變時，總相位差易超出設計值，易導致偏振失真。</li>
                            <li>零階遲滯器對外界變化（如溫度、角度、波長）較不敏感，穩定性佳。</li>
                        </ul>
                    </li>
                    <li><strong>組合型零階遲滯器：</strong>
                        <ul>
                            <li>可將兩片多階波片疊加（快軸、慢軸交錯），使總遲滯量僅為兩者差值，改善溫度與波長敏感問題，但視場角仍較小。</li>
                        </ul>
                    </li>
                    <li><strong>機械強度考量：</strong>
                        <ul>
                            <li>零階波片太薄易碎，實際製作上需額外保護，或利用複合結構。</li>
                        </ul>
                    </li>
                    <li><strong>常見材料：</strong>
                        <ul>
                            <li>石英、雲母適合做零階波片；聚合物因微小雙折射也可做零階波片，視場角大，口徑長、應用方便。</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>零階遲滯器主打穩定性與精度、適合科研與精密儀器，多階遲滯器重成本與易製造，適合一般場域。辨析兩者的敏感性與應用情境，是選用偏振光元件的關鍵。</strong><sup>[1]</sup></p>
            </section>

            <section class="learning-module">
                <h2>8.7.6 實例計算</h2>
                <h4><strong>例題：雲母四分之一波板厚度計算</strong></h4>
                <p><strong>已知條件：</strong><br>
                - 波長：\\(\\lambda_0 = 589 \\text{ nm}\\)<br>
                - 雲母折射率：\\(n_1 = 1.5997\\)，\\(n_2 = 1.5941\\)</p>
                
                <p><strong>求解：</strong><br>
                對四分之一波板，光程差必須是 \\(\\lambda_0/4\\) 的奇數倍：
                $$ d = \\frac{(4m + 1)\\lambda_0}{4|n_o - n_e|} $$
                當 m = 0 時：
                $$ d = \\frac{589 \\text{ nm}}{4(1.5997 - 1.5941)} = 26.3 \\text{ μm} $$
                </p>

                <p><strong>複合零階波板遲滯量：</strong>
                $$ \\Delta\\omega = \\frac{2\\pi}{\\lambda_0} (d_1 - d_2)(n_o - n_e) $$
                此表達式依賴於兩個分量板厚度的<strong>差值</strong>，而非單個板的厚度。</p>
            </section>

            <section class="learning-module">
                <h2>8.7.7 圓偏振器 (Circular Polarizers)</h2>
                <h4><strong>定義</strong></h4>
                <p>由適當定向的線偏振器和90°遲滯器的串聯組合構成，能夠產生圓偏振光的器件。</p>
                
                <h4><strong>原理</strong></h4>
                <p>電場與四分之一波板主軸成45°的線偏振光，經過該板後變為圓偏振。<strong>出射圓偏振光的手性取決於線偏振器透射軸相對於遲滯器快軸是+45°還是-45°</strong>。</p>
                
                <h4><strong>公式</strong></h4>
                <p>線偏振器與快軸夾角決定手性：<br>
                - +45°：產生一種手性<br>
                - -45°：產生相反手性</p>
                <img src="https://hackmd.io/_uploads/Syezwc4yWl.png" alt="Circular Polarizer diagram">
                
                <h4><strong>應用範例</strong></h4>
                <ul>
                    <li><strong>CP-HN商用圓偏振器</strong>：HN偏振片與拉伸聚乙烯醇90°遲滯器的疊層</li>
                    <li><strong>雙向圓偏振器</strong>：線偏振器位於兩個分別定向為+45°和-45°的遲滯器之間</li>
                    <li><strong>圓偏振光分析</strong>：用於確定已知圓偏振光的手性</li>
                </ul>
            </section>
        `,
        initLogic: () => {
            // 附錄頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    
    "problems": {
        html: `
            <h1 class="chapter-title">附錄：課本習題 (Ch 3, 4, 7, 8)</h1>
            
            <section class="learning-module">
                <h2><center>第 3 章 練習題</center></h2>
                
                <h3>3.1</h3>
                <p>考慮一個在真空中傳播的平面電磁波，其表示式為（使用 SI 單位制）：<br>
                \\(E_x = 0\\)<br>
                \\(E_y = 4\\cos[2\\pi \\times 10^{15}(t - x/c) + \\pi/2]\\)<br>
                \\(E_z = 0\\)</p>
                <p>(a) 請求出此電磁波的頻率、波長、運動方向、振幅、初始相位角以及偏振方向。<br>
                (b) 請寫出其磁通量密度的表示式。</p>
                <img src="https://hackmd.io/_uploads/BkkGEUfybx.png" alt="Problem 3.1 Solution">
            </section>

            <section class="learning-module">
                <h3>3.25</h3>
                <p>一個線偏振的簡諧平面波，標量振幅為10 V/m，沿著xy平面內一條與x軸成45°角的直線傳播，其振動平面是xy平面。假定k和k都是正數，請寫出描述這個波的向量表示式。設波在真空中，計算通量密度。</p>
                <img src="https://hackmd.io/_uploads/B1QKVLfJ-x.png" alt="Problem 3.25 Solution">
            </section>

            <section class="learning-module">
                <h3>3.26</h3>
                <p>從雷射光發射出的紫外線脈衝，每個脈衝持續2.00ns。雷射光束的直徑為2.5 mm。已知每個脈衝攜帶的能量為6.0 J。<br>
                (a)定出每個波列在空間的長度，<br>
                (b)求這樣的脈衝中單位體積的平均能量。</p>
                <img src="https://hackmd.io/_uploads/r1FsNUz1Wl.png" alt="Problem 3.26 Solution">
            </section>

            <section class="learning-module">
                <h3>3.27</h3>
                <p>一台雷射產生真空中的電磁輻射脈衝，每個脈衝持續時間為10⁻¹² 秒。若輻射通量密度為10²⁰ W/m²，求雷射光的電場的振幅。</p>
                <img src="https://hackmd.io/_uploads/SyITNIz1We.png" alt="Problem 3.27 Solution">
            </section>
            
            <section class="learning-module">
                <h3>3.28</h3>
                <p>一台 1.0 mW的雷射光束直徑為2mm。假設可以忽略光束的散開，計算在雷射光鄰近的能量密度。</p>
                <img src="https://hackmd.io/_uploads/HkHmBIMJ-e.png" alt="Problem 3.28 Solution">
            </section>

            <section class="learning-module">
                <h3>3.31</h3>
                <p>一個100W的黃光燈泡，假設可以忽略熱損耗並且準單色波長為550nm，那麼它每秒發射多少個光子？實際上在一盞普通的100W白熾燈中，只有總消耗功率的大約2.5%作為可見光發射出來。</p>
                <img src="https://hackmd.io/_uploads/BJjRBIGyZe.png" alt="Problem 3.31 Solution">
            </section>

            <section class="learning-module">
                <h3>3.32</h3>
                <p>一盞普通的3.0V 白熾閃光燈，電流為0.25A，將消耗的功率的大約1%轉變為光（\\(\\lambda=550nm\\)）。若光束近似為圓柱形，截面面積為10cm²，問：<br>
                (a)每秒發射多少個光子？<br>
                (b)光束的每一米長度上有多少個光子？<br>
                (c)離開閃光燈時光束的通量密度是多少？</p>
                <img src="https://hackmd.io/_uploads/Hkl-ILM1Wx.png" alt="Problem 3.32 Solution">
            </section>

            <section class="learning-module">
                <h2><center>第 4 章 練習題</center></h2>

                <h3>4.52</h3>
                <p>非偏振光在空氣中，與法線成 30.0°的角度，射到一片折射率為 1.60 的玻璃平滑表面上。求兩個振幅反射係數。</p>
                <img src="https://hackmd.io/_uploads/B1pHUIz1Zg.png" alt="Problem 4.52 Solution">
            </section>

            <section class="learning-module">
                <h3>4.53</h3>
                <p>仔細思考上一題，計算 R₁、R、T₁、T₁，以及淨透射比 T 和淨反射比 R。</p>
                <img src="https://hackmd.io/_uploads/Sy6v88z1-l.png" alt="Problem 4.53 Solution">
            </section>

            <section class="learning-module">
                <h3>4.54</h3>
                <p>已知 1000 W/m² 的非偏振光在空氣中射到空氣-玻璃界面，此界面 n = 3/2。若 E 場垂直於入射面的光的透射比為 0.80，那麼這時有多少光被反射？</p>
                <img src="https://hackmd.io/_uploads/BkvtUUzybg.png" alt="Problem 4.54 Solution">
            </section>

            <section class="learning-module">
                <h3>4.55</h3>
                <p>一束非偏振光，輻照度2000 W/m²，射到空氣-塑膠界面。已知此界面反射的光中，300 W/m²是電場E垂直於入射面偏振，200 W/m² 是電場E平行於入射面偏振。求穿過此界面的淨透射比。</p>
                <img src="https://hackmd.io/_uploads/SJzxPIzJbg.png" alt="Problem 4.55 Solution">
            </section>

            <section class="learning-module">
                <h3>4.57</h3>
                <p>輻照度 400 W/m² 的準單色光，沿法線方向射到人眼角膜（n = 1.376）上。若此人在水下（n = 1.33），求射入角膜的透射輻照度。</p>
                <img src="https://hackmd.io/_uploads/HJIfw8fyWe.png" alt="Problem 4.57 Solution">
            </section>

            <section class="learning-module">
                <h3>4.58</h3>
                <p>比較空氣-水（n = 4/3）界面和空氣-冕牌(crown)玻璃（n = 3/2）界面的振幅反射係數，二者都近乎正入射。反射輻照度與入射輻照度的比值是多少？</p>
                <img src="https://hackmd.io/_uploads/HkcND8GkZe.png" alt="Problem 4.58 Solution">
            </section>

            <section class="learning-module">
                <h2><center>第 7 章 練習題</center></h2>

                <h3>7.5</h3>
                <p>(a) 真空中 1 公尺間隔內有多少個波長為 500 nm 的光波？<br>
                (b) 如果在光路上插入 5 cm 厚的玻璃板（n = 1.5），此 1 公尺間隔內又有多少個波？<br>
                (c) 確定兩種情況的光程差（OPD）。<br>
                (d) 證明 \\(\\lambda/20\\) 相當於 (a) 與 (b) 的答案之差。</p>
                <img src="https://hackmd.io/_uploads/HkvuDIMJWe.png" alt="Problem 7.5 Solution">
            </section>

            <section class="learning-module">
                <h3>7.7</h3>
                <p>利用 (7.9)、(7.10)、(7.11) 三式證明，兩個波<br>
                \\(E₁ = E₀₁ \\sin [\\omega t – k(x + \\Delta x)]\\)<br>
                \\(E₂ = E₀₁ \\sin (\\omega t – kx)\\)<br>
                其合波為<br>
                \\(E = 2E₀₁ \\cos(k\\Delta x/2) \\sin(\\omega t – kx + k\\Delta x/2)\\)</p>
                <img src="https://hackmd.io/_uploads/rkUguIGJ-g.png" alt="Problem 7.7 Solution 1">
                <img src="https://hackmd.io/_uploads/ByY-dIGJWl.png" alt="Problem 7.7 Solution 2">
            </section>

            <section class="learning-module">
                <h3>7.9</h3>
                <p>利用複數表示法求合波 \\(E = E₁ + E₂\\)，其中<br>
                \\(E₁ = E₀ \\cos(kx + \\omega t)\\)，\\(E₂ = -E₀ \\cos(kx – \\omega t)\\)<br>
                請描述合波的性質。</p>
                <img src="https://hackmd.io/_uploads/SJ5muIfkbe.png" alt="Problem 7.9 Solution">
            </section>

            <section class="learning-module">
                <h3>7.10</h3>
                <p>函數 \\(E₁ = 3\\cos(\\alpha t)\\)、\\(E₂ = 4\\sin(\\alpha t)\\)。先證明 \\(E₂ = 4\\cos(\\alpha t – \\pi/2)\\)。再利用相量和參考題圖 P.7.10 證明<br>
                \\(E₃ = E₁ + E₂ = 5\\cos(\\alpha t – \\theta)\\)；求 \\(\\theta\\)。當 \\(E₁ = 0\\) 或 \\(E₂ = 0\\)，\\(\\theta\\) 等於多少？\\(E₃\\) 是領先還是落後於 \\(E₁\\)？請解釋。</p>
                <img src="https://hackmd.io/_uploads/Hk7H_8fyZx.png" alt="Problem 7.10 Solution">
            </section>

            <section class="learning-module">
                <h2><center>第 8 章 練習題</center></h2>
                
                <h3>8.1</h3>
                <p>兩個光波 \\(E_x = E_0\\cos(kz-\\omega t)\\) 和 \\(E_y = -E_0\\cos(kz-\\omega t)\\) 在空間中重疊。請證明其合成波為線偏振波，並求出它的振幅和傾斜角 \\(\\theta\\)。</p>
                <img src="https://hackmd.io/_uploads/B1l79IMkbl.png" alt="Problem 8.1 Solution">
            </section>

            <section class="learning-module">
                <h3>8.2</h3>
                <p>兩個使用 SI 單位制的光波 \\(E_z = 4\\sin(ky-\\omega t)\\) 和 \\(E_x = 3\\sin(ky-\\omega t)\\) 在空間中重疊。請求出合成波的偏振態。</p>
                <img src="https://hackmd.io/_uploads/Syj45UfJZe.png" alt="Problem 8.2 Solution">
            </section>

            <section class="learning-module">
                <h3>8.3</h3>
                <p>兩個使用 SI 單位制的光波 \\(E_x = 8\\sin(ky-\\omega t+\\pi/2)\\) 和 \\(E_z = 8\\sin(ky-\\omega t)\\)。請問哪個波領先？領先多少？它們的合成波是何種形式？其振幅為多少？</p>
                <img src="https://hackmd.io/_uploads/ryPL9UfyWl.png" alt="Problem 8.3 Solution">
            </section>

            <section class="learning-module">
                <h3>8.4</h3>
                <p>請完整描述下面每一個波的偏振態：<br>
                (a) \\(\\vec{E} = \\hat{i}E_0 \\cos(kz - \\omega t) - \\hat{j}E_0 \\cos(kz - \\omega t)\\)<br>
                (b) \\(\\vec{E} = \\hat{i}E_0 \\sin 2\\pi(z/\\lambda - \\nu t) - \\hat{j}E_0 \\sin 2\\pi(z/\\lambda - \\nu t)\\)<br>
                (c) \\(\\vec{E} = \\hat{i}E_0 \\sin(\\omega t - kz) + \\hat{j}E_0 \\sin(\\omega t - kz - \\pi/4)\\)<br>
                (d) \\(\\vec{E} = \\hat{i}E_0 \\cos(\\omega t - kz) + \\hat{j}E_0 \\cos(\\omega t - kz + \\pi/2)\\)</p>
                <img src="https://hackmd.io/_uploads/H17u5LG1Ze.png" alt="Problem 8.4 Solution">
            </section>

            <section class="learning-module">
                <h3>8.5</h3>
                <p>考慮由表示式 \\(\\vec{E}(z,t) = [\\hat{i} \\cos \\omega t + \\hat{j} \\cos(\\omega t - \\pi/2)]E_0 \\sin kz\\) 所描述的擾動。請問這是哪一種波與其主要特徵。</p>
                <img src="https://hackmd.io/_uploads/rJ0F98M1Zg.png" alt="Problem 8.5 Solution">
            </section>
            
            <section class="learning-module">
                <h3>8.7</h3>
                <p>S 態光波角頻率為 \\(\\omega\\)，振幅 \\(E_0\\)，沿 x 軸傳播，振動平面與 xy 平面成 25°角，當 \\(t = 0, x = 0\\) 時電場為零。寫出該波的表示式。</p>
                <img src="https://hackmd.io/_uploads/ryjaq8M1Zg.png" alt="Problem 8.7 Solution">
            </section>

            <section class="learning-module">
                <h3>8.8</h3>
                <p>P 態光波角頻率為 \\(\\omega\\)，振幅 \\(E_0\\)，在 xy 平面上沿 x 軸成 45°的方向傳播，振動面在 xy 平面上，當 \\(t = 0, y = 0, x = 0\\) 時電場為零。寫出該波的表示式。</p>
                <img src="https://hackmd.io/_uploads/HJr1iIMyZe.png" alt="Problem 8.8 Solution">
            </section>

            <section class="learning-module">
                <h3>8.9</h3>
                <p>R 態光波頻率為 \\(\\omega\\)，沿正 x 方向傳播。當 \\(t = 0, x = 0\\) 時 E 場指向負 z 軸。寫出表示式。</p>
                <img src="https://hackmd.io/_uploads/rJTeiIMJbg.png" alt="Problem 8.9 Solution">
            </section>

            <section class="learning-module">
                <h3>8.10</h3>
                <p>一束電場沿垂直方向的線偏振光正入射於理想線偏振片上，偏振片透光軸亦為垂直。若入射光輻照度為 200 W/m²，透過光的輻照度是多少？</p>
                <img src="https://hackmd.io/_uploads/H1Mmo8Gk-g.png" alt="Problem 8.10 Solution">
            </section>

            <section class="learning-module">
                <h3>8.11</h3>
                <p>一個普通鎢絲燈泡射到理想線偏振片的光強為 300 W/m²，問射出的輻照通量密度是多少？</p>
                <img src="https://hackmd.io/_uploads/rk3wiIG1bg.png" alt="Problem 8.11 Solution">
            </section>

            <section class="learning-module">
                <h3>8.20</h3>
                <p>輻照度為 1 的自然光正入射到 HN-32 偏振片上：<br>
                (a) 出射光是多少？<br>
                (b) 若又放一片相同偏振片，兩片透光軸成 45°，有多少光能透過？</p>
                <img src="https://hackmd.io/_uploads/SJlVYsIzkbx.png" alt="Problem 8.20 Solution">
            </section>

            <section class="learning-module">
                <h3>8.21</h3>
                <p>輻照度為 Iᵢ 的自然光正入射三片理想線偏振片，且各偏振片透光軸相互平行，每片主透光率 64%、消光比高。請證明透過量約為 13% I₀。</p>
                <img src="https://hackmd.io/_uploads/H1U728fy-e.png" alt="Problem 8.21 Solution">
            </section>

            <section class="learning-module">
                <h3>8.22</h3>
                <p>在 8.10 節中我們得知，糖和胰島素等物質具旋光性，其偏振面旋轉角正比於路程及濃度。若裝有糖溶液的玻璃容器擺在一對交叉的 HN-50 線偏振片間，入射在第一偏振片上的自然光有 50% 能通過第二偏振片。問容器中的糖溶液使光轉動了多少角度？</p>
                <img src="https://hackmd.io/_uploads/HJ_LnUfy-x.png" alt="Problem 8.22 Solution">
            </section>

            <section class="learning-module">
                <h3>8.27</h3>
                <p>設有兩個完全相同理想線偏振器、一個自然光源，兩偏振器串聯，透光軸分別在 0°、50°。現插入第三偏振片於中間，透光軸在 25°。若入射光為 1000 W/m²，則插入與未插入中間偏振片時各有多少光能透過？</p>
                <img src="https://hackmd.io/_uploads/SyX_3Iz1Zl.png" alt="Problem 8.27 Solution">
            </section>

            <section class="learning-module">
                <h3>8.28</h3>
                <p>有 200 W/m² 無規偏振光入射於一串理想線偏振器，第一偏振器透光軸垂直、第二取向 30°、第三 60°、第四 90°。問射出光有多少？</p>
                <img src="https://hackmd.io/_uploads/BJAFhLfJbl.png" alt="Problem 8.28 Solution">
            </section>

            <section class="learning-module">
                <h3>8.38</h3>
                <p>請畫出石英的渥拉斯頓棱鏡，標示所有相關的光線和偏振態。</p>
                <p><em>請參考課本內容</em></p>
            </section>

            <section class="learning-module">
                <h3>8.39</h3>
                <p>渥拉斯頓棱鏡由兩個 45° 石英棱鏡組成，若 \\(\\lambda=589.3 nm\\)，求出射光線分離的角度。（提示：與方解石渥斯頓棱鏡比較，e 光和 o 光位置交換）</p>
                <img src="https://hackmd.io/_uploads/Bydy6LzJWl.png" alt="Problem 8.39 Solution 1">
                <img src="https://hackmd.io/_uploads/SJdZ6UMJ-l.png" alt="Problem 8.39 Solution 2">
            </section>

            <section class="learning-module">
                <h3>8.43</h3>
                <p>浸於水（n = 1.33）的玻璃片（ng = 1.65），對光反射的布魯斯特角是多少？</p>
                <img src="https://hackmd.io/_uploads/S1MmTIGyZg.png" alt="Problem 8.43 Solution">
            </section>

            <section class="learning-module">
                <h3>8.44</h3>
                <p>某透明材料於空氣中的臨界角為 41.0°，求其偏振角。</p>
                <img src="https://hackmd.io/_uploads/Bybr6UzJ-g.png" alt="Problem 8.44 Solution">
            </section>

            <section class="learning-module">
                <h3>8.45</h3>
                <p>一束光從某未知液體表面反射，用一片線偏振片考查反射光。發現偏振片中心軸（垂直於其平面）與垂直方向成 54.30°時，反射光全部能通過，且透光軸平行於界面。由此計算液體折射率。</p>
                <img src="https://hackmd.io/_uploads/HkSIp8Gkbx.png" alt="Problem 8.45 Solution">
            </section>

            <section class="learning-module">
                <h3>8.46</h3>
                <p>發現從浸入酒精（ne=1.36）裡的玻璃板（ng=1.65）反射的光是完全線偏振的。在何種角度下這束偏振光可透射過玻璃板？</p>
                <img src="https://hackmd.io/_uploads/rkoDTLzyZl.png" alt="Problem 8.46 Solution">
            </section>

            <section class="learning-module">
                <h3>8.47</h3>
                <p>一束自然光以40°入射於空氣-玻璃界面（n=1.5），計算反射光的偏振度。</p>
                <img src="https://hackmd.io/_uploads/By0u6IzyZx.png" alt="Problem 8.47 Solution">
            </section>

            <section class="learning-module">
                <h3>8.56</h3>
                <p>假設你有一線偏振器、一四分之一波片及自然光源，如何分辨這兩器件？</p>
                <img src="https://hackmd.io/_uploads/ryi2TLzkZl.png" alt="Problem 8.56 Solution">
            </section>

            <section class="learning-module">
                <h3>8.57</h3>
                <p>線偏振光在水平軸成 130°振動（在第二、第四象限），通過一個 \\(\\pi/2\\) 波片，波片快軸垂直。描述出射光偏振態。若入射光電場與慢軸平行，偏振方向該怎麼旋轉？</p>
                <img src="https://hackmd.io/_uploads/rJDuCIfy-x.png" alt="Problem 8.57 Solution">
            </section>

            <section class="learning-module">
                <h3>8.58</h3>
                <p>右旋圓偏振光通過一四分之一波片，快軸垂直。描述出射光的偏振態。該偏振狀態是否在圖 8.42 對應圓偏移一個象限？</p>
                <img src="https://hackmd.io/_uploads/r1pKALzyZx.png" alt="Problem 8.58 Solution">
            </section>

            <section class="learning-module">
                <h3>8.59</h3>
                <p>右旋圓偏振光通過一四分之一波片，快軸水平。說明出射光是在第一、三象限 45°方向的線偏振光原因。</p>
                <img src="https://hackmd.io/_uploads/rynoALMk-g.png" alt="Problem 8.59 Solution">
            </section>

            <section class="learning-module">
                <h3>8.60</h3>
                <p>在第二、第四象限、振動角 135°的線偏振光通過一半波片，快軸垂直。說明為什麼出射是第一、三象限的線偏振。</p>
                <img src="https://hackmd.io/_uploads/HkE6RUf1Wg.png" alt="Problem 8.60 Solution">
            </section>

            <section class="learning-module">
                <h3>8.61</h3>
                <p>右旋圓偏振光通過一半波片，快軸垂直。描述出射光的偏振態。</p>
                <img src="https://hackmd.io/_uploads/rJnCRLGkZg.png" alt="Problem 8.61 Solution">
            </section>
            
            <section class="learning-module">
                <h3>8.65</h3>
                <p>波長 590 nm 左旋圓偏振光在 z 方向垂直通過石英片，變成右旋圓偏振。石英片經切割拋光，光軸 y 方向（nₒ = 1.5443, nₑ = 1.5534），石英片面為 xy 平面。(a)快軸何方向？(b)石英片最小厚度需多少？</p>
                <img src="https://hackmd.io/_uploads/SkIZ1vMy-g.png" alt="Problem 8.65 Solution">
            </section>

            <section class="learning-module">
                <h3>8.66</h3>
                <p>L (左旋)偏振態光通過快軸於水平方向的八分之一波片，出射光偏振態為何？</p>
                <img src="https://hackmd.io/_uploads/Hk5V1wG1-e.png" alt="Problem 8.66 Solution">
            </section>

            <section class="learning-module">
                <h3>8.75</h3>
                <p>任意一個與水平方向成 \\(\\theta\\) 角的線偏振態，其瓊斯向量為 \\(\\begin{bmatrix} \\cos\\theta \\\\ \\sin\\theta \\end{bmatrix}\\)。<br>
                證明這個矩陣與表 8.5 中+45°的 \\(\\mathscr{P}\\) 態一致。</p>
                <img src="https://hackmd.io/_uploads/B1HokwMyWl.png" alt="Problem 8.75 Solution">
            </section>

            <section class="learning-module">
                <h3>8.76</h3>
                <p>寫出一個代表與 \\(\\tilde{E}_1 = \\begin{bmatrix} 1 \\\\ -2i \\end{bmatrix}\\) 正交的偏振態的瓊斯向量 \\(\\tilde{E}_2\\)。簡單描述這兩個偏振態。</p>
                <img src="https://hackmd.io/_uploads/BkL2JwM1Zx.png" alt="Problem 8.76 Solution">
            </section>
        `,
        // --- 習題頁面沒有測驗或字卡 ---
        initLogic: () => {
            // 課本習題頁面不需要 quiz 或 flashcard 邏輯
        }
    },
    "creater": {
        html: `
            <section class="learning-module author-preface">
                <h2 class="section-title"><center>作者序</center></h2>
                <article class="preface-content">
                    <p>
                    大家好~ 我是本網站的作者顏靖衡。<br><br>
                    在這個網站中，我整理了 大二上《光學二》的練習題，目的是為了幫助同學們更好地理解課本內容，並提供一個方便的學習資源。<br><br>
                    我希望這些解答能夠對大家有所幫助，無論是在課堂學習還是自我複習上。如果你有任何問題或建議，歡迎隨時與我聯繫。祝大家學習順利，事事順心！
                    </p>
                    <p>
                    聯絡資訊：<br>
                        Discord ： Seirou #radix405225<br>
                        Youtube 頻道： TATA的音樂頻道<br>

                    </p>
                    
                    <p class="signature">—— 作者 <span class="author-name"> 顏靖衡 </span></p>
                </article>
            </section>
        `,
    initLogic: () => {
        // 作者序通常不需要額外邏輯，但可在此加上淡入動畫或互動效果
        const section = document.querySelector('.author-preface');
        if (section) {
            section.style.opacity = 0;
            setTimeout(() => {
                section.style.transition = 'opacity 1.2s ease';
                section.style.opacity = 1;
                }, 300);
            }
        }
    }

}

// 修正 #3：在這裡補上 initFlashcards 函式 (您可以先用空函式佔位)
/**
 * 初始化指定章節的字卡遊戲
 * @param {string} chapterId - 章節 ID (例如 '1', '2')
 * @param {Array<Object>} cards - 字卡資料陣列
 */
function initFlashcards(chapterId, cards) {
    console.log(`initFlashcards for ${chapterId} called.`);
    
    // 這裡應該要有您字卡遊戲的完整邏輯
    // (例如：綁定按鈕、點擊翻面等等)
    // 如果您還沒寫好，先放空著，至少不會報錯
    
    // 範例：(您可能需要類似的程式碼)
    /*
    let currentCardIndex = 0;
    const front = document.getElementById(`flashcard-front-${chapterId}`);
    const back = document.getElementById(`flashcard-back-${chapterId}`);
    const cardInner = document.getElementById(`flashcard-${chapterId}`).querySelector('.flashcard-inner');

    function updateCard() {
        if (front && back) {
            front.innerHTML = cards[currentCardIndex].front;
            back.innerHTML = cards[currentCardIndex].back;
            // 重新觸發 MathJax 渲染字卡上的公式
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([front, back]);
            }
        }
    }

    if (cardInner) {
        cardInner.addEventListener('click', () => {
            cardInner.classList.toggle('is-flipped');
        });
    }

    const nextBtn = document.getElementById(`next-card-${chapterId}`);
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            updateCard();
            if (cardInner.classList.contains('is-flipped')) {
                cardInner.classList.remove('is-flipped');
            }
        });
    }

    const prevBtn = document.getElementById(`prev-card-${chapterId}`);
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
            updateCard();
            if (cardInner.classList.contains('is-flipped')) {
                cardInner.classList.remove('is-flipped');
            }
        });
    }
    
    // 初始載入第一張卡
    updateCard();
    */
}

/* --- 
  SPA 核心邏輯
--- */
function initializeAppLogic() {
    const contentArea = document.getElementById('content-area');

    // 導覽列點擊事件 (*** 您的原始碼，不需修改 ***)
    function setupNavigation() {
        const allLinks = document.querySelectorAll('#main-nav a');
        const topLevelLinks = document.querySelectorAll('#main-nav > ul > li > a');

        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const chapterId = link.dataset.chapter;
                
                if (chapterId) {
                    e.preventDefault(); 
                    
                    if (chapterData[chapterId]) {
                        renderChapter(chapterId);
                        
                        topLevelLinks.forEach(l => l.classList.remove('active'));
                        document.querySelectorAll('.dropdown-content a').forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                        
                        const dropdownParent = link.closest('.dropdown');
                        if (dropdownParent) {
                            const parentToggle = dropdownParent.querySelector('.dropbtn');
                            if(parentToggle) {
                                parentToggle.classList.add('active');
                            }
                        }

                    } else {
                        contentArea.innerHTML = `<h1 class="chapter-title">章節 ${chapterId} 尚未建立</h1><p>請稍候...</p>`;
                    }
                }
            });
        });
    }

    // 渲染章節內容的函式 (*** 您的原始碼，不需修改 ***)
    function renderChapter(chapterId) {
        const data = chapterData[chapterId];
        contentArea.innerHTML = data.html;

        if (data.initLogic) {
            data.initLogic();
        }

        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([contentArea])
                .catch((err) => console.log('MathJax typeset error:', err));
        }
    }

    // --- 啟動 APP ---
    setupNavigation();
    
    const firstChapterLink = document.querySelector('#main-nav a[data-chapter]');
    if (firstChapterLink) {
        firstChapterLink.click();
    }
} // <--- initializeAppLogic() 函式在這裡結束

// 修正 #1：刪除了這裡多餘的 '}'

// 修正 #2：在最外面呼叫啟動函式
initializeAppLogic();