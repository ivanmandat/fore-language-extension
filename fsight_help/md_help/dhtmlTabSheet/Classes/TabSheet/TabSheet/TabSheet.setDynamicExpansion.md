# TabSheet.setDynamicExpansion

TabSheet.setDynamicExpansion
-


# TabSheet.setDynamicExpansion


## Синтаксис


setDynamicExpansion(value: boolean);


## Параметры


*value.* Признак использования динамического увеличения количества
 строк/столбцов:


	- True. Количество строк/столбцов
	 таблицы автоматически увеличивается при достижении последней заполненной
	 ячейки;


	- False. Количество строк/столбцов
	 таблицы отображается до последней заполненной ячейки.


## Описание


Метод setDynamicExpansion устанавливает
 признак использования динамического увеличения количества строк/столбцов
 при достижении последней заполненной ячейки таблицы.


## Комментарии


Для установки признака динамического увеличения количества строк/столбцов
 в [конструкторе TabSheet](Constructor_TabSheet.htm) используйте
 свойство [DynamicExpansion](../../../Interfaces/TabSheetSettings/TabSheetSettings.DynamicExpansion.htm).


Для получения признака динамического увеличения количества строк/столбцов
 используйте метод [getDynamicExpansion](TabSheet.getDynamicExpansion.htm).


## Пример


Для выполнения примера используйте HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>TabSheet</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <script src="../build/PP.TabSheet.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
</head>

<script type="text/javascript">
    // Создадим таблицу
    function createTabSheet() {
        // Зададим структуру, значения ячеек и стиль таблицы
        var dataSource = {
            "Structure": {"@MUR": 1,"@MUC": 2,"DefaultRow": {"@H": 50},"DefaultColumn": {"@W": 100}
            },
            "Cells": {
                "Cell": [
                    {"@T": "0", "@L": "0", "CD": {"@FT": "16905"}},
                    {"@T": "0", "@L": "1", "CD": {"@FT": "3912"}},
                    {"@T": "0", "@L": "2", "CD": {"@FT": "9242"}},
                    {"@T": "1", "@L": "0", "CD": {"@FT": "19281"}},
                    {"@T": "1", "@L": "1", "CD": {"@FT": "5315"}},
                    {"@T": "1", "@L": "2", "CD": {"@FT": "14031"}}
                ]
            },
            "Styles": {
                "Style": [
                    {
                        "Text": { "@VA": 1 },
                        "Fill": { "@C": "#D2DFEE" },
                        "Font": { "@F": "Arial", "@S": 12 },
                        "Borders": {
                            "Border": [
                                { "@I": 2, "@S": 0, "@C": "#FFFFFF", "@W": 2 },
                                { "@I": 3, "@S": 0, "@C": "#FFFFFF", "@W": 2 },
                                { "@I": 4, "@S": 0, "@C": "#FFFFFF", "@W": 2 },
                                { "@I": 5, "@S": 0, "@C": "#FFFFFF", "@W": 2 }
                            ]
                        }
                    }
                ]
            },
        };
        // Зададим параметры таблицы
        tabSheet = new PP.Ui.TabSheet({
            ParentNode: document.getElementById("table"),
            DataSource: dataSource,
            IsEditable: true,
            Width: 350,
            Height: 190,
        });
        // Зададим признак использования динамического увеличения количества строк/столбцов
        tabSheet.setDynamicExpansion(true);
        // Выведем в консоль признак использования динамического увеличения количества строк/столбцов
        if (tabSheet.getDynamicExpansion() == true) {
            console.log("Используется динамическое увеличение количества строк/столбцов");
        }
            else console.log("Не используется динамическое увеличение количества строк/столбцов");
    }
</script>
<body onload="createTabSheet()">
    <div id="table"></div>
</body>
</html>

В результате выполнения примера на html-странице будет размещена таблица
 с возможностью вертикальной и горизонтальной прокрутки для использования
 динамического увеличения количества строк/столбцов:


![](../../../Interfaces/TabSheetSettings/TabSheetSettings.DynamicExpansion.png)


В консоль будет выведено сообщение об использовании динамического увеличения
 количества строк/столбцов при достижении последней заполненной ячейки.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
