function LogisticsData() {
    var dataObj;

    dataObj = [
        { "level": "0 - 1", "minutes": 50, "manpower": 0, "bullet": 145, "rations": 145, "components": 0, "human": false, "equipment": false, "manufacture": true, "repair": true, "purchase": false },
        { "level": "0 - 2", "minutes": 180, "manpower": 550, "bullet": 0, "rations": 0, "components": 350, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "0 - 3", "minutes": 720, "manpower": 900, "bullet": 900, "rations": 900, "components": 250, "human": false, "equipment": true, "manufacture": false, "repair": true, "purchase": false },
        { "level": "0 - 4", "minutes": 1440, "manpower": 0, "bullet": 1200, "rations": 800, "components": 750, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": true },
        { "level": "1 - 1", "minutes": 15, "manpower": 10, "bullet": 30, "rations": 15, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "1 - 2", "minutes": 30, "manpower": 0, "bullet": 40, "rations": 60, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "1 - 3", "minutes": 60, "manpower": 30, "bullet": 0, "rations": 30, "components": 10, "human": false, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "1 - 4", "minutes": 120, "manpower": 160, "bullet": 160, "rations": 0, "components": 0, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "2 - 1", "minutes": 40, "manpower": 100, "bullet": 0, "rations": 0, "components": 30, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "2 - 2", "minutes": 90, "manpower": 60, "bullet": 200, "rations": 80, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "2 - 3", "minutes": 240, "manpower": 10, "bullet": 10, "rations": 10, "components": 230, "human": false, "equipment": false, "manufacture": true, "repair": true, "purchase": false },
        { "level": "2 - 4", "minutes": 360, "manpower": 0, "bullet": 250, "rations": 600, "components": 60, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "3 - 1", "minutes": 20, "manpower": 50, "bullet": 0, "rations": 75, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "3 - 2", "minutes": 45, "manpower": 0, "bullet": 120, "rations": 70, "components": 30, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "3 - 3", "minutes": 90, "manpower": 0, "bullet": 300, "rations": 0, "components": 0, "human": false, "equipment": false, "manufacture": true, "repair": true, "purchase": false },
        { "level": "3 - 4", "minutes": 300, "manpower": 0, "bullet": 0, "rations": 300, "components": 300, "human": true, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "4 - 1", "minutes": 60, "manpower": 0, "bullet": 185, "rations": 185, "components": 0, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "4 - 2", "minutes": 120, "manpower": 0, "bullet": 0, "rations": 0, "components": 210, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "4 - 3", "minutes": 360, "manpower": 800, "bullet": 550, "rations": 0, "components": 0, "human": true, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "4 - 4", "minutes": 480, "manpower": 400, "bullet": 400, "rations": 400, "components": 150, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "5 - 1", "minutes": 30, "manpower": 0, "bullet": 0, "rations": 100, "components": 45, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "5 - 2", "minutes": 150, "manpower": 0, "bullet": 600, "rations": 300, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "5 - 3", "minutes": 240, "manpower": 800, "bullet": 400, "rations": 400, "components": 0, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "5 - 4", "minutes": 420, "manpower": 100, "bullet": 0, "rations": 0, "components": 700, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "6 - 1", "minutes": 120, "manpower": 300, "bullet": 300, "rations": 0, "components": 100, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "6 - 2", "minutes": 180, "manpower": 0, "bullet": 200, "rations": 550, "components": 100, "human": false, "equipment": false, "manufacture": true, "repair": true, "purchase": false },
        { "level": "6 - 3", "minutes": 300, "manpower": 0, "bullet": 0, "rations": 200, "components": 500, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "6 - 4", "minutes": 720, "manpower": 800, "bullet": 800, "rations": 800, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": true },
        { "level": "7 - 1", "minutes": 150, "manpower": 650, "bullet": 0, "rations": 650, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "7 - 2", "minutes": 240, "manpower": 0, "bullet": 650, "rations": 0, "components": 300, "human": true, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "7 - 3", "minutes": 330, "manpower": 900, "bullet": 600, "rations": 600, "components": 0, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "7 - 4", "minutes": 480, "manpower": 250, "bullet": 250, "rations": 250, "components": 600, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "8 - 1", "minutes": 60, "manpower": 150, "bullet": 150, "rations": 150, "components": 0, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "8 - 2", "minutes": 180, "manpower": 0, "bullet": 0, "rations": 0, "components": 450, "human": false, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "8 - 3", "minutes": 360, "manpower": 400, "bullet": 800, "rations": 800, "components": 0, "human": false, "equipment": false, "manufacture": true, "repair": true, "purchase": false },
        { "level": "8 - 4", "minutes": 540, "manpower": 1500, "bullet": 400, "rations": 400, "components": 100, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "9 - 1", "minutes": 30, "manpower": 0, "bullet": 0, "rations": 100, "components": 50, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "9 - 2", "minutes": 90, "manpower": 180, "bullet": 0, "rations": 180, "components": 100, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "9 - 3", "minutes": 270, "manpower": 750, "bullet": 750, "rations": 0, "components": 0, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "9 - 4", "minutes": 420, "manpower": 500, "bullet": 900, "rations": 900, "components": 0, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "10 - 1", "minutes": 40, "manpower": 140, "bullet": 200, "rations": 0, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "10 - 2", "minutes": 100, "manpower": 0, "bullet": 240, "rations": 180, "components": 0, "human": true, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "10 - 3", "minutes": 320, "manpower": 0, "bullet": 480, "rations": 480, "components": 300, "human": false, "equipment": false, "manufacture": true, "repair": true, "purchase": false },
        { "level": "10 - 4", "minutes": 600, "manpower": 660, "bullet": 660, "rations": 660, "components": 330, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "11 - 1", "minutes": 240, "manpower": 350, "bullet": 1050, "rations": 0, "components": 0, "human": true, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "11 - 2", "minutes": 240, "manpower": 360, "bullet": 540, "rations": 540, "components": 0, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "11 - 3", "minutes": 480, "manpower": 0, "bullet": 750, "rations": 1500, "components": 250, "human": false, "equipment": false, "manufacture": false, "repair": true, "purchase": false },
        { "level": "11 - 4", "minutes": 600, "manpower": 0, "bullet": 1650, "rations": 0, "components": 0, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },

        { "level": "12 - 1", "minutes": 60, "manpower": 0, "bullet": 220, "rations": 220, "components": 120, "human": false, "equipment": true, "manufacture": false, "repair": false, "purchase": false },
        { "level": "12 - 2", "minutes": 90, "manpower": 360, "bullet": 0, "rations": 0, "components": 0, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "12 - 3", "minutes": 540, "manpower": 800, "bullet": 1200, "rations": 1200, "components": 0, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "12 - 4", "minutes": 720, "manpower": 1800, "bullet": 0, "rations": 1800, "components": 900, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },

        { "level": "13 - 1", "minutes": 180, "manpower": 0, "bullet": 0, "rations": 1200, "components": 0, "human": false, "equipment": false, "manufacture": true, "repair": false, "purchase": false },
        { "level": "13 - 2", "minutes": 360, "manpower": 800, "bullet": 800, "rations": 800, "components": 300, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "13 - 3", "minutes": 1440, "manpower": 0, "bullet": 4000, "rations": 0, "components": 1200, "human": false, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
        { "level": "13 - 4", "minutes": 360, "manpower": 0, "bullet": 0, "rations": 0, "components": 1000, "human": true, "equipment": false, "manufacture": false, "repair": false, "purchase": false },
    ];

    return dataObj;
}

function newResourceStatistics(manpower, bullet, rations, components, human, equipment, manufacture, repair, purchase, manpowerWeight, bulletWeight, rationsWeight, componentsWeight, minutesMt, minutesLt, levelList, rank) {
    logisticsData = LogisticsData();

    for (let i = logisticsData.length - 1; i >= 0; i--) {
        let del = false;

        //將時間不符合設定關卡踢除
        if (logisticsData[i].minutes < minutesMt || logisticsData[i].minutes > minutesLt) {
            del = true;
        }

        //篩選掉不跑關卡
        if (levelList.includes(logisticsData[i].level)) {
            del = true;
        }

        if (del) {
            logisticsData.splice(i, 1);
        }
    }

    //計算每分鐘及每天資源量
    for (let i in logisticsData) {
        // 每分鐘
        logisticsData[i].manpowerOfMinutes = logisticsData[i].manpower / logisticsData[i].minutes;
        logisticsData[i].bulletOfMinutes = logisticsData[i].bullet / logisticsData[i].minutes;
        logisticsData[i].rationsOfMinutes = logisticsData[i].rations / logisticsData[i].minutes;
        logisticsData[i].componentsOfMinutes = logisticsData[i].components / logisticsData[i].minutes;

        // 每天
        logisticsData[i].manpowerOfDay = logisticsData[i].manpowerOfMinutes * 24 * 60;
        logisticsData[i].bulletOfDay = logisticsData[i].bulletOfMinutes * 24 * 60;
        logisticsData[i].rationsOfDay = logisticsData[i].rationsOfMinutes * 24 * 60;
        logisticsData[i].componentsOfDay = logisticsData[i].componentsOfMinutes * 24 * 60;
    }

    let premList = [];
    for (let i = 0; i < logisticsData.length - 3; i++) {
        for (let j = i + 1; j < logisticsData.length - 2; j++) {
            for (let k = j + 1; k < logisticsData.length - 1; k++) {
                for (let l = k + 1; l < logisticsData.length; l++) {
                    let check = true;

                    //排除無指定獎利
                    if (human)
                        if ((logisticsData[i].human || logisticsData[j].human || logisticsData[k].human || logisticsData[l].human) == false) check = false;
                    if (equipment)
                        if ((logisticsData[i].equipment || logisticsData[j].equipment || logisticsData[k].equipment || logisticsData[l].equipment) == false) check = false;
                    if (manufacture)
                        if ((logisticsData[i].manufacture || logisticsData[j].manufacture || logisticsData[k].manufacture || logisticsData[l].manufacture) == false) check = false;
                    if (repair)
                        if ((logisticsData[i].repair || logisticsData[j].repair || logisticsData[k].repair || logisticsData[l].repair) == false) check = false;
                    if (purchase)
                        if ((logisticsData[i].purchase || logisticsData[j].purchase || logisticsData[k].purchase || logisticsData[l].purchase) == false) check = false;

                    if (manpower)
                        if (logisticsData[i].manpowerOfDay == 0 && logisticsData[j].manpowerOfDay == 0 && logisticsData[k].manpowerOfDay == 0 && logisticsData[l].manpowerOfDay == 0) check = false;
                    if (bullet)
                        if (logisticsData[i].bulletOfDay == 0 && logisticsData[j].bulletOfDay == 0 && logisticsData[k].bulletOfDay == 0 && logisticsData[l].bulletOfDay == 0) check = false;
                    if (rations)
                        if (logisticsData[i].rationsOfDay == 0 && logisticsData[j].rationsOfDay == 0 && logisticsData[k].rationsOfDay == 0 && logisticsData[l].rationsOfDay == 0) check = false;
                    if (components)
                        if (logisticsData[i].componentsOfDay == 0 && logisticsData[j].componentsOfDay == 0 && logisticsData[k].componentsOfDay == 0 && logisticsData[l].componentsOfDay == 0) check = false;

                    if (check) {
                        logisticsData[i].totalResource = new Number(logisticsData[i].manpowerOfDay) + new Number(logisticsData[i].bulletOfDay) + new Number(logisticsData[i].rationsOfDay) + new Number(logisticsData[i].componentsOfDay);
                        logisticsData[j].totalResource = new Number(logisticsData[j].manpowerOfDay) + new Number(logisticsData[j].bulletOfDay) + new Number(logisticsData[j].rationsOfDay) + new Number(logisticsData[j].componentsOfDay);
                        logisticsData[k].totalResource = new Number(logisticsData[k].manpowerOfDay) + new Number(logisticsData[k].bulletOfDay) + new Number(logisticsData[k].rationsOfDay) + new Number(logisticsData[k].componentsOfDay);
                        logisticsData[l].totalResource = new Number(logisticsData[l].manpowerOfDay) + new Number(logisticsData[l].bulletOfDay) + new Number(logisticsData[l].rationsOfDay) + new Number(logisticsData[l].componentsOfDay);

                        let sortVal = 0;
                        sortVal += (new Number(logisticsData[i].manpowerOfDay) + new Number(logisticsData[j].manpowerOfDay + new Number(logisticsData[k].manpowerOfDay) + new Number(logisticsData[l].manpowerOfDay))) * new Number(manpowerWeight);
                        sortVal += (new Number(logisticsData[i].bulletOfDay) + new Number(logisticsData[j].bulletOfDay) + new Number(logisticsData[k].bulletOfDay) + new Number(logisticsData[l].bulletOfDay)) * new Number(bulletWeight);
                        sortVal += (new Number(logisticsData[i].rationsOfDay) + new Number(logisticsData[j].rationsOfDay) + new Number(logisticsData[k].rationsOfDay) + new Number(logisticsData[l].rationsOfDay)) * new Number(rationsWeight);
                        sortVal += (new Number(logisticsData[i].componentsOfDay) + new Number(logisticsData[j].componentsOfDay) + new Number(logisticsData[k].componentsOfDay) + new Number(logisticsData[l].componentsOfDay)) * new Number(componentsWeight);


                        premList.push({
                            "level": [logisticsData[i], logisticsData[j], logisticsData[k], logisticsData[l]],
                            "manpowerOfMinutes": new Number(logisticsData[i].manpowerOfMinutes) + new Number(logisticsData[j].manpowerOfMinutes) + new Number(logisticsData[k].manpowerOfMinutes) + new Number(logisticsData[l].manpowerOfMinutes),
                            "bulletOfMinutes": new Number(logisticsData[i].bulletOfMinutes) + new Number(logisticsData[j].bulletOfMinutes) + new Number(logisticsData[k].bulletOfMinutes) + new Number(logisticsData[l].bulletOfMinutes),
                            "rationsOfMinutes": new Number(logisticsData[i].rationsOfMinutes) + new Number(logisticsData[j].rationsOfMinutes) + new Number(logisticsData[k].rationsOfMinutes) + new Number(logisticsData[l].rationsOfMinutes),
                            "componentsOfMinutes": new Number(logisticsData[i].componentsOfMinutes) + new Number(logisticsData[j].componentsOfMinutes) + new Number(logisticsData[k].componentsOfMinutes) + new Number(logisticsData[l].componentsOfMinutes),
                            "manpowerOfDay": new Number(logisticsData[i].manpowerOfDay) + new Number(logisticsData[j].manpowerOfDay) + new Number(logisticsData[k].manpowerOfDay) + new Number(logisticsData[l].manpowerOfDay),
                            "bulletOfDay": new Number(logisticsData[i].bulletOfDay) + new Number(logisticsData[j].bulletOfDay) + new Number(logisticsData[k].bulletOfDay) + new Number(logisticsData[l].bulletOfDay),
                            "rationsOfDay": new Number(logisticsData[i].rationsOfDay) + new Number(logisticsData[j].rationsOfDay) + new Number(logisticsData[k].rationsOfDay) + new Number(logisticsData[l].rationsOfDay),
                            "componentsOfDay": new Number(logisticsData[i].componentsOfDay) + new Number(logisticsData[j].componentsOfDay) + new Number(logisticsData[k].componentsOfDay) + new Number(logisticsData[l].componentsOfDay),
                            "totalResource": new Number(logisticsData[i].totalResource) + new Number(logisticsData[j].totalResource) + new Number(logisticsData[k].totalResource) + new Number(logisticsData[l].totalResource),
                            "sortVal": sortVal
                        });
                    }
                }
            }
        }
    }

    premList.sort(function(a, b) {
        if (a.sortVal == b.sortVal) {
            return 0
        } else if (a.sortVal < b.sortVal) {
            return 1;
        } else if (a.sortVal > b.sortVal) {
            return -1;
        }
    });

    premList.splice(rank, premList.length - rank);

    return premList;
}

$(document).ready(function() {
    $("#query").on("click", function() {
        $("#queryDiv").fadeOut(100, function() {
            $("#dataDiv").fadeIn();
        });
    });

    $("#reQuery").on("click", function() {
        $("#dataDiv").fadeOut(100, function() {
            $("#dataTable").empty();
            $("#queryDiv").fadeIn();
        });
    });

    $("#query").on("click", function() {
        let manpower = $("#manpower").prop("checked");
        let bullet = $("#bullet").prop("checked");
        let rations = $("#rations").prop("checked");
        let components = $("#components").prop("checked");

        let human = $("#human").prop("checked");
        let equipment = $("#equipment").prop("checked");
        let manufacture = $("#manufacture").prop("checked");
        let repair = $("#repair").prop("checked");
        let purchase = $("#purchase").prop("checked");

        let manpowerWeight = $("#manpowerWeight").val();
        let bulletWeight = $("#bulletWeight").val();
        let rationsWeight = $("#rationsWeight").val();
        let componentsWeight = $("#componentsWeight").val();

        let levelObjList = $("#levelList").find("input[type='checkbox']:not(:checked)");
        let levelList = [];
        for (let i = 0; i < levelObjList.length; i++) {
            levelList.push($(levelObjList[i]).data("level"));
        }

        let minutesMt = $("#minutesMt").val();
        let minutesLt = $("#minutesLt").val();

        let rank = $("#rank").val();

        let resData = newResourceStatistics(manpower, bullet, rations, components, human, equipment, manufacture, repair, purchase, manpowerWeight, bulletWeight, rationsWeight, componentsWeight, minutesMt, minutesLt, levelList, rank);

        for (let i in resData) {
            let table = $("<table></table>").addClass("text-nowrap").css("margin", "20px auto");

            let thead = $("<thead></thead>");
            let tr = $("<tr></tr>").addClass("table table-sm table-primary");
            $(tr).append("<th>關卡</th>");
            $(tr).append("<th>時間(分)</th>");
            $(tr).append("<th>人力</th>");
            $(tr).append("<th>彈藥</th>");
            $(tr).append("<th>口糧</th>");
            $(tr).append("<th>零件</th>");
            $(tr).append("<th>人形契約</th>");
            $(tr).append("<th>裝備契約</th>");
            $(tr).append("<th>快速建造</th>");
            $(tr).append("<th>快速修復</th>");
            $(tr).append("<th>採購幣</th>");
            $(tr).append("<th class='d-none d-md-table-cell'>人力(分)</th>");
            $(tr).append("<th class='d-none d-md-table-cell'>彈藥(分)</th>");
            $(tr).append("<th class='d-none d-md-table-cell'>口糧(分)</th>");
            $(tr).append("<th class='d-none d-md-table-cell'>零件(分)</th>");
            $(tr).append("<th>人力(天)</th>");
            $(tr).append("<th>彈藥(天)</th>");
            $(tr).append("<th>口糧(天)</th>");
            $(tr).append("<th>零件(天)</th>");
            $(tr).append("<th>總計(天)</th>")
            $(thead).append(tr);
            $(table).append(thead);

            let tbody = $("<tbody></tbody");
            for (let j in resData[i]["level"]) {
                let tr = $("<tr></tr>").addClass("table-light").css("border-bottom", "1px solid #cccccc");
                $(tr).append("<td style='text-align: center;'>" + resData[i]["level"][j]["level"] + "</td>");
                $(tr).append("<td style='text-align: right;'>" + resData[i]["level"][j]["minutes"] + "</td>");
                $(tr).append("<td style='text-align: right;'>" + resData[i]["level"][j]["manpower"] + "</td>");
                $(tr).append("<td style='text-align: right;'>" + resData[i]["level"][j]["bullet"] + "</td>");
                $(tr).append("<td style='text-align: right;'>" + resData[i]["level"][j]["rations"] + "</td>");
                $(tr).append("<td style='text-align: right;'>" + resData[i]["level"][j]["components"] + "</td>");
                $(tr).append("<td style='text-align: center;'>" + (resData[i]["level"][j]["human"] ? "√" : "") + "</td>");
                $(tr).append("<td style='text-align: center;'>" + (resData[i]["level"][j]["equipment"] ? "√" : "") + "</td>");
                $(tr).append("<td style='text-align: center;'>" + (resData[i]["level"][j]["manufacture"] ? "√" : "") + "</td>");
                $(tr).append("<td style='text-align: center;'>" + (resData[i]["level"][j]["repair"] ? "√" : "") + "</td>");
                $(tr).append("<td style='text-align: center;'>" + (resData[i]["level"][j]["purchase"] ? "√" : "") + "</td>");
                $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["level"][j]["manpowerOfMinutes"]).toFixed(2) + "</td>");
                $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["level"][j]["bulletOfMinutes"]).toFixed(2) + "</td>");
                $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["level"][j]["rationsOfMinutes"]).toFixed(2) + "</td>");
                $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["level"][j]["componentsOfMinutes"]).toFixed(2) + "</td>");
                $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["level"][j]["manpowerOfDay"]).toFixed(0) + "</td>");
                $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["level"][j]["bulletOfDay"]).toFixed(0) + "</td>");
                $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["level"][j]["rationsOfDay"]).toFixed(0) + "</td>");
                $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["level"][j]["componentsOfDay"]).toFixed(0) + "</td>");
                $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["level"][j]["totalResource"]).toFixed(0) + "</td>");
                $(tbody).append(tr);
            }
            $(table).append(tbody);

            let tfoot = $("<tfoot></tfoot>");
            tr = $("<tr></tr>").addClass("table-dark");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td></td>");
            $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["manpowerOfMinutes"]).toFixed(2) + "</td>");
            $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["bulletOfMinutes"]).toFixed(2) + "</td>");
            $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["rationsOfMinutes"]).toFixed(2) + "</td>");
            $(tr).append("<td class='d-none d-md-table-cell' style='text-align: right;'>" + new Number(resData[i]["componentsOfMinutes"]).toFixed(2) + "</td>");
            $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["manpowerOfDay"]).toFixed(0) + "</td>");
            $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["bulletOfDay"]).toFixed(0) + "</td>");
            $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["rationsOfDay"]).toFixed(0) + "</td>");
            $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["componentsOfDay"]).toFixed(0) + "</td>");
            $(tr).append("<td style='text-align: right;'>" + new Number(resData[i]["totalResource"]).toFixed(0) + "</td>");
            $(tfoot).append(tr);
            $(table).append(tfoot);

            $("#dataTable").append(table);
        }

        $("#queryDiv").fadeOut(function() {
            $("#dataDiv").fadeIn();
        });
    });

    $("#reQuery").on("click", function() {
        $("#dataDiv").fadeOut(function() {
            $("#dataTable").empty();
            $("#queryDiv").fadeIn();
        });
    });

    $("#mwSub").on("click", function() {
        $("#manpowerWeight").val(new Number($("#manpowerWeight").val()) - 1);
    });
    $("#mwAdd").on("click", function() {
        $("#manpowerWeight").val(new Number($("#manpowerWeight").val()) + 1);
    });
    $("#bwSub").on("click", function() {
        $("#bulletWeight").val(new Number($("#bulletWeight").val()) - 1);
    });
    $("#bwAdd").on("click", function() {
        $("#bulletWeight").val(new Number($("#bulletWeight").val()) + 1);
    });
    $("#rwSub").on("click", function() {
        $("#rationsWeight").val(new Number($("#rationsWeight").val()) - 1);
    });
    $("#rwAdd").on("click", function() {
        $("#rationsWeight").val(new Number($("#rationsWeight").val()) + 1);
    });
    $("#cwSub").on("click", function() {
        $("#componentsWeight").val(new Number($("#componentsWeight").val()) - 1);
    });
    $("#cwAdd").on("click", function() {
        $("#componentsWeight").val(new Number($("#componentsWeight").val()) + 1);
    });
});