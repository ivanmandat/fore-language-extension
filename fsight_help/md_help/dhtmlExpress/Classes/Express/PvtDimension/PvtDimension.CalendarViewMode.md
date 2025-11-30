# PvtDimension.CalendarViewMode

PvtDimension.CalendarViewMode
-


# PvtDimension.CalendarViewMode


## Синтаксис


CalendarViewMode: PP.Exp.CalendarViewMode;


## Описание


Свойство CalendarViewMode определяет
 режим работы с календарным измерением.


## Комментарии


Значение свойства CalendarViewMode
 можно устанавливать из JSON и с помощью метода setCalendarViewMode,
 а возвращать - при помощи свойства getCalendarViewMode.


По умолчанию содержит значение PP.Exp.CalendarViewMode.Full.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим информацию об измерении
 экспресс-отчета:


// Получим измерение
pDim = eaxAnalyzer.getDims()[2];
// Получим вариант отображения в случае, если измерение календарное
console.debug("Вариант отображения календарного измерения: " + pDim.getCalendarViewMode());
// Проверим может ли измерение быть частным и является ли оно частным
console.debug(pDim.getIsCanFix() ? "Измерение может быть частным" : "Измерение не может быть частным");
console.debug(pDim.getIsFixed() ? "Измерения является частным" : "Измерение не является частным");
// Получим параметры отображаемых атрибутов
console.debug(pDim.getMultipleAttributesEnabled() ? "Отображение нескольких атрибутов через разделитель: доступно" : "Отображение нескольких атрибутов через разделитель: недоступно");
console.debug("Отображаемые аттрибуты: " + pDim.getNamingAttributes());
console.debug("Атрибуты будут разделены символом: " + pDim.getMultipleAttributesSeparator());
console.debug(pDim.getMultipleAttributesSpaced() ? "Атрибуты и разделитель стоят через пробел" : "Атрибуты и разделитель стоят вплотную");
// Получим информацию о режиме отметки и позиции измерения
console.debug(pDim.getMultiSelect() ? "Множественная отметка доступна" : "Множественная отметка недоступна");
switch (pDim.getPosition()) {
  case "Left":
    console.debug("Измерение расположено по строкам");
    break
  case "Top":
    console.debug("Измерение расположено по столбцам");
    break
  case "Fixed":
    console.debug("Измерение расположено в фиксированных измерениях");
};
// Получим объект с метаданными измерения
console.debug(pDim.getPvtMetadata());

В результате выполнения примера в консоль были выведены параметры измерения
 с индексом 2, в том числе объект с метаданными измерения.


См. также:


[PvtDimension](PvtDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
