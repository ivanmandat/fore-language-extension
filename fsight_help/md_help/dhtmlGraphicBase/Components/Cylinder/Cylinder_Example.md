# Пример создания компонента Cylinder

Пример создания компонента Cylinder
-


# Пример создания компонента Cylinder


Для выполнения примера необходимо создать html-страницу и выполнить
 следующие действия:


1. Добавить ссылку на css-файл PP.css. Также нужно добавить ссылки на
 следующие js-файлы:


	- PP.js;


	- PP.Charts.js;


	- PP.GraphicsBase.js;


	- PP.Util.js;


	- resources.ru.js.


2. Далее в теге <head> необходимо добавить сценарий, создающий
 цилиндр:


<script>
var cylinder;
function createCylinder() {
    // Создаем цилиндр
    cylinder = new PP.Ui.Cylinder({
        AnimationDuration: 4000, // Длительность воспроизведения анимации
        UseAnimation: false, // Воспроизведение анимации запрещено
        ParentNode: document.body, // Корневая вершина
        // Размеры колбы  и области построения цилиндра не связаны
        IsRelativeDimensions: false,
        Width: 350, // Ширина области построения цилиндра
        FlaskWidth: 130, // Ширина колбы цилиндра
        Height: 250, // Высота области построения цилиндра
        FlaskHeight: 170, // Высота колбы цилиндра
        Orientation: PP.Orientation.Vertical,
        Loaded: function(sender, args) {
            console.log("Цилиндр загружен");
        }
    });
    // Рисуем цилиндр

    cylinder.draw();
    // Перерисовываем цилиндр
    cylinder.redraw();
    // Создаём ось цилиндра
    this.createGaugeAxis();
    // Разрешаем использование анимации
    cylinder.setUseAnimation(true);
    // Устанавливаем значение цилиндра
    this.createGaugeValue(7);
    cylinder._Values = [cylinder.getValue()];
    // Запрещаем использование анимации
    cylinder.setUseAnimation(false);
    // Создаём линию тренда
    this.createTrendLine(5);
    // Создаём заголовок цилиндра
    this.createCylindHeader();
    // Перерисовываем значения цилиндра
    cylinder.redrawValues();
    // Создаём рамку для области построения цилиндра
    this.createBorder();
}

// Создаёт ось цилиндра
var createGaugeAxis = function() {
    var axis = new PP.Ui.CylinderGaugeAxis({
        ParentCylinder: cylinder, // Родительский цилиндр
        MajorTicksCount: 6, // Количество основных делений оси
        Width: 450, // Ширина оси
        Height: 250, // Высота оси
        Min: 0, // Минимальное значение оси
        Max: 10, // Максимальное значение оси
        LabelStyle: new PP.Style(), // Стиль для делений оси
        ValuesMode: PP.Ui.AxisValuesMode.MinMax, // Режим отображения значений оси
        Position: PP.LTRB.Right // Располагаем ось справа
    });
    // Устанавливаем ось
    cylinder.setAxis(axis.getSettings());
    // Обновляем стиль для оси цилиндра
    this.applyStyleForAxis(axis);

    axis.setAxisUnits("см");
    // Перемещаем подпись для указания единицы измерения оси
    axis.getUnit().setLeft(axis.getUnit().getLeft() - 30);
    // Обновляем ось цилиндра
    this.updateAxis(axis);
}
// Обновляет ось цилиндра
var updateAxis = function(axis) {
    cylinder._Axis = axis;
}
// Возвращает значения для оси
var getAxisValues = function(minValue, maxValue, majorTicksCount) {
    var values = [];
    var step = Math.round((maxValue - minValue) / (majorTicksCount - 1));
    for (var i = minValue; i <= maxValue; i += step) {
        values.push(i + " см");
    }
    return values;
}

// Применяем стиль для оси цилиндра
var applyStyleForAxis = function(axis) {
    // Создаём стиль для делений оси
    var border = new PP.Border({
        Width: 1, // Толщина делений
    });
    // Создаём стиль для основных делений оси
    var majorTickStyle = {
        Border: border,
        Length: 20
    };
    // Создаём стиль для промежуточных делений оси
    var minorTickStyle = {
        Border: border,
        Length: 10
    };
    // Устанавливаем стиль для основных делений оси
    axis.setMajorTickStyle(majorTickStyle);
    // Устанавливаем стиль для промежуточных делений оси
    axis.setMinorTickStyle(minorTickStyle);
}

// Создаёт линию тренда
var createTrendLine = function(value) {
    var trendLine = new PP.Ui.CylinderTrend({
        Color: new PP.Color(0, 0, 255), // Цвет линии
        LabelStyle: {
            Text: value.toString() // Подпись
        },
        Label: null,
        Length: 300, // Длина линии
        ParentCylinder: cylinder, // Родительский цилиндр
        Value: value, // Значение, соответствующее линии тренда
        Width: 1, // Толщина линии
        LineStyle: PP.Ui.LineTypes.Dot // Стиль линии
    });

    // Рисуем линию тренда
    trendLine.draw();
    trendLine.redraw();
    // Устанавливаем линию тренда
    cylinder.setTrends([trendLine]);
    // Получаем подпись
    var label = cylinder.getTrends()[0].getLabel();
    if (label) {
        // Скорректируем расположение подписи
        label.setPosition(label.getLeft() - 10, label.getTop());
    }
}

// Создаёт значение цилиндра
var createGaugeValue = function(value) {
    var gaugeValue = new PP.Ui.CylinderGaugeValue({
        Value: value, // Координата верхнего основания цилиндра
        StartValue: 0, // Координата нижнего основания цилиндра
        ParentAxis: cylinder.getAxis(), // Координатная ось, проходящая вдоль цилиндра
        Fill: new PP.SolidColorBrush({
            Color: "#FF0000" // Цвет заливки боковой поверхности цилиндра
        }),
        UpFill: new PP.SolidColorBrush({
            Color: "#00FF00" // Цвет заливки верхнего основания цилиндра
        })
    });

    // Рисуем значение цилиндра
    gaugeValue.draw();
    gaugeValue.redraw();
    // Воспроизводим анимацию линии тренда
    if (cylinder.getUseAnimation()) {
        objAnim = new PP.Ui.Animation({
            Duration: cylinder.getAnimationDuration(),
            Start: 0,
            End: value
        });
        objAnim.animateProp(gaugeValue, "Value");
    } else {
        gaugeValue.setValue(value);
    }

    // Устанавливаем значение
    cylinder.setValue(gaugeValue);
}
// Создаёт заголовок цилиндра
var createCylindHeader = function() {
    var header = new PP.Ui.CylinderHeader({
            ParentCylinder: cylinder, // Цилиндр, к которому принадлежит заголовок
            VerticalAlign: PP.VerticalAlignment.Top,
            HorizontalAlign: PP.HorizontalAlignment.Left,
            Font: new PP.Font({
                IsBold: true,
                Size: 18
            })
        })
        // Устанавливаем заголовок
    cylinder._Header = header;

    // Перерисовываем заголовок
    cylinder.getHeader().redraw();
    // Устанавливаем расположение заголовка
    cylinder.getHeader().setPosition(30, 0);
}
// Определяет тень для заголовка
var applyShadowForHeader = function(header) {
    var shadow = new PP.Shadow({
        Enabled: true,
        Color: new PP.Color(PP.Color.Colors.blue),
        Angle: 45,
        Size: 1,

        EnableBlur: true,
        EnableOpacity: true,
        BlurSize: 20,
        Distance: 10,
        Opacity: 0.5
    });
    header.setShadow(shadow);
}
// Создаёт рамку для области построения цилиндра
var createBorder = function() {

    var rectElem = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectElem.setAttributeNS(null, "width", cylinder.getWidth());
    rectElem.setAttributeNS(null, "height", cylinder.getHeight());
    rectElem.setAttributeNS(null, "stroke-width", 1);
    rectElem.setAttributeNS(null, "stroke", "rgb(195,195,195)");
    rectElem.setAttributeNS(null, "fill-opacity", 0);
    cylinder.getSVGNode().appendChild(rectElem);
}
</script>
3. В теге <body> в качестве значения атрибута «onLoad» указать
 имя функции для создания цилиндра:


<body onload="createCylinder()">
</body>
В результате выполнения примера на html-странице будет размещен компонент
 [Cylinder](Cylinder.htm):


![](Cylinder.png)


Также в консоли браузера будет выведено сообщение о загрузке компонента:


Цилиндр загружен


См. также:


[Cylinder](Cylinder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
