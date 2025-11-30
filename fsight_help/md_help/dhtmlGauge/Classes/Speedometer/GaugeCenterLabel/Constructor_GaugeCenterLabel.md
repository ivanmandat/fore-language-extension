# Конструктор GaugeCenterLabel

Конструктор GaugeCenterLabel
-


# Конструктор GaugeCenterLabel


## Синтаксис


PP.Ui.GaugeCenterLabel(settings);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор GaugeCenterLabel создает
 экземпляр класса [GaugeCenterLabel](GaugeCenterLabel.htm).


## Пример


Для выполнения примера необходимо наличие на странице компонента [Speedometer](../../../Components/Speedometer/Speedometer.htm)
 с идентификатором «speedometer» (см. «[Пример
 создания спидометра с мастером](../../../Components/Speedometer/speedometer_wirh_master.htm)»). Создадим новую центральную метку
 спидометра:


// Удаляем мастер для настройки спидометра
master.setDataView(null);
master.dispose();
// Получаем шкалу спидометра
var scale = speedometer.getScales()[3];
// Получаем стрелку шкалы по имени
var arrow = scale.getArrowByName("Arrow1")[0];
// Запрещаем использование прозрачности
arrow.setOpacityEnabled(false);
// Устанавливаем длину стрелки
arrow.setRadius(0.8);
// Получаем формат вывода значений в подписи шкалы
var maskLabel = arrow.getScale().getMaskLabel();
// Получаем фактическую ширину и фактическую высоту метки
var realWidth = speedometer.getCenterLabel().getRealWidth();
var realHeight = speedometer.getCenterLabel().getRealHeight();
// Создаем центральную метку спидометра
var label = new PP.Ui.GaugeCenterLabel({
    Width: realWidth, // Ширина метки
    Height: realHeight, // Высота метки
    Arrow: arrow, // Стрелка шкалы
    MaskLabel: maskLabel, // Формат вывода значений в подписи
    Background: { // Кисть для заливки фона метки
        '@PPType': 'PP.SolidColorBrush',
        '@Color': '#ffffff'
    },
    Border: { // Граница метки
        '@PPType': 'PP.SolidColorBrush',
        '@Color': '#6B6B61'
    }
});
// Устанавливаем новую центральную метку спидометра
speedometer.setCenterLabel(label);
// Устанавливаем значение стрелки
arrow.setValue(2);
// Перерисовываем метку
label.animate(speedometer, speedometer.getParent());
В результате выполнения примера для спидометра была установлена новая
 центральная метка:


![](GaugeCenterLabel_redraw.png)


См. также:


[GaugeCenterLabel](GaugeCenterLabel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
