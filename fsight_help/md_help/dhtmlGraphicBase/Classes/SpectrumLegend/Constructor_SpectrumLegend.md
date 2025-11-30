# Конструктор SpectrumLegend

Конструктор SpectrumLegend
-


# Конструктор SpectrumLegend


## Синтаксис


PP.Ui.SpectrumLegend(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор SpectrumLegend создает
 экземпляр класса [SpectrumLegend](SpectrumLegend.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценариев PP.js, PP.GraphicsBase.js и файл стилей PP.css. В теге
 <body> разместим блок с идентификатором «spectrum» для хранения
 созданной легенды:


<div id="spectrum" style = "position: absolute; top:5px; left:5px; width: 610px; height: 110px; border: 1px solid #660000; "></div>
Определим настройки спектральной легенды, разместив следующий код в
 блоке <script type="text/javascript">:


[![](../../Opened.gif)![](../../Closed.gif)Настройки
 спектральной легенды](javascript:TextPopup(this))


var settings = {
    // Отобразим разделители цветовых диапазонов
    "AreMarksVisible": "True",
    // Установим горизонтальное и вертикальное выравнивание
    "HorizontalAlignment": "Center",
    "VerticalAlignment": "Center",
    // Установим поля и отступы
    "Margin": "0 0 0 0",
    "Padding": "0 0 0 0",
    // Определим формат значений элементов по умолчанию
    "Format": "#.##0.00",
    // Установим настройки для верхнего текста легенды
    "Header": {

        // Определим верхний текст легенды
        "Text": "Верхний текст",
        // Определим выравнивание верхнего текста
        "HorizontalAlignment": "Left",
        "VerticalAlignment": "Center",
        // Определим стиль верхнего текста
        "Style": {
            "Release": {
                "Font": {
                    "IsItalic": "False",
                    "FontFamily": "Arial",
                    "Size": "10",
                    "IsBold": "False",
                    "Color": "#FF010000"
                },

                "Shadow": {
                    "Enabled": "False"
                },
                "Border": {
                    "Enabled": "False"
                },
                "Background": {
                    "PPType": "PP.SolidColorBrush",
                    "Color": "#FF0FFF",
                    "Opacity": "0.5"
                }
            }

        }
    },
    // Установим настройки для нижнего текста легенды
    "Footer": {
        // Определим нижний текст легенды
        "Text": "Нижний текст",
        // Определим выравнивание нижнего текста
        "HorizontalAlignment": "Center",
        "VerticalAlignment": "Center",
        // Определим стиль нижнего текста
        "Style": {
            "Release": {
                "Font": {

                    "IsItalic": "False",
                    "FontFamily": "Arial",
                    "Size": "10",
                    "IsBold": "False",
                    "Color": "#FF010000"
                },
                "Shadow": {
                    "Enabled": "False"
                },
                "Border": {
                    "Enabled": "False"
                },

                "Background": {
                    "PPType": "PP.SolidColorBrush",
                    "Color": "#FF0FFF",
                    "Opacity": "0.5"
                }
            }
        }
    },
    // Установим шкалу легенды
    "Scale": {
        // Определим значения элементов шкалы

        "Values": "10.00 40.00 70.00 120.00",
        // Определим цвета элементов шкалы
        "Items": "#FFCA423E #FFD06664 #FFFFFFCC #FF84AF75 #FF6EA45A",
        // Цвет отсутствия данных
        "NoData": "#FFBFBFBF",
        // Тип шкалы
        "TypeArguments": "Brush",
    },
    // Установим перенос слов
    "TextWrapping": "Wrap",
    // Определим формат записи интервалов с обеими границами
    "BetweenFormat": "от {0:0.00} до {1:0.00}",
    // Активируем подсветку элементов

    "DoHighlight": "True",
    // Определим формат записи интервалов с левой границей
    "GreaterFormat": "более {0:0.00}",
    // Цвет подсветки
    "HighlightBrush": "#CCCCCC",
    // Режим активации подсветки элементов легенды
    "HoverMode": "MouseOver",
    // Определим формат записи интервалов с правой границей
    "LessFormat": "менее {0:0.00}",
    // Определим позицию, текст и признак отображения элемента, определяющего отсутствующие данные
    "NoDataPosition": "Before",
    "NoDataText": "Нет данных",

    "NoDataVisible": "True",
    // Определим цвет и толщину границ элементов легенды
    "ItemBorderColor": "#00000F",
    "ItemBorderThickness": "1",
    // Определим формат элементов легенды по умолчанию
    "ItemFormat": "{0:0.00}",
    // Определим цвет, длину и ширину разделителей цветовых диапазонов
    "MarkColor": "#000000",
    "MarkSize": "5",
    "MarkThickness": "1",
    // Режим отображения интервалов

    "Mode": 'IntervalLessGreater',
    // Признак поворота текста при изменении выравнивания
    "RotateText": "true",
    // Высота спектральной полосы
    "SpectrumSize": "20",
    // Позиция текста элемента относительно самого элемента
    "TextPosition": "Under",
    // Расстояние от разделителей цветовых диапазонов спектральной легенды до текста
    "TextSpacing": "6",
    // Определим стиль спектральной легенды
    "Style": {
        "Release": {
            "Font": {

                "IsItalic": "False",
                "FontFamily": "Arial",
                "Size": "10",
                "IsBold": "False",
                "Color": "#FF010000"
            },
            "Shadow": {
                "Enabled": "False"
            },
            "Border": {
                "Width": '3'
            },

            "Background": {
                "PPType": "PP.SolidColorBrush",
                "Color": "#FFFFFF",
                "Opacity": "0.5"
            }
        }
    },
    // Определим параметры всплывающей подсказки
    "ToolTip": {
        // Определим стиль подсказки
        "Style": {
            "Release": {

                "Font": {
                    "IsItalic": "False",
                    "FontFamily": "Arial",
                    "Size": "14",
                    "IsBold": "False",
                    "Color": "#FF010000"
                },
                "Shadow": {
                    "Enabled": "False"
                },

                "Border": {
                    "Enabled": "False"
                },
                "Background": {
                    "PPType": "PP.SolidColorBrush",
                    "Color": "#FF0FFF",
                    "Opacity": "0.5"
                }
            }
        },
        // Маска текста подсказки

        "MaskText": "Значение: {0:0.00}",
        // Поля подсказки
        "Padding": "0 0 0 0",
        // Перенос текста отсутствует
        "TextWrapping": "NoWrap",
        // Размеры всплывающей подсказки
        "Width": "80",
        "Height": "40"
    }
};


Далее в теге <body> необходимо добавить сценарий, создающий легенду:


<script type = "text/javascript" >
// Создадим объект легенды
var spectrum = new PP.Ui.SpectrumLegend(settings);
// Отрисуем легенду
spectrum.draw(new PP.Rect({
    Left: 7,
    Top: 0,
    Width: 600,
    Height: 110
}), document.getElementById("spectrum"));
</script>
В результате выполнения примера на html-странице будет размещена [спектральная легенда](SpectrumLegend.htm):


![](SpectrumLegend.png)


См. также:


[SpectrumLegend](SpectrumLegend.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
