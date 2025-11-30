# EaxMdService.setEaxObjectMeta

EaxMdService.setEaxObjectMeta
-


# EaxMdService.setEaxObjectMeta


## Синтаксис


setEaxObjectMeta(report, objectType, metadata, callback);


## Параметры


report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс отчета.


objectType. [PP.Exp.Ui.EaxObjectType](../../../Enums/EaxObjectType.htm).
 Тип визуализатора.


metadata. Object.
 Метаданные объекта.


callback. PP.Delegate
 | Function. Функция обратного
 вызова.


## Описание


Метод setEaxObjectMeta устанавливает
 метаданные указанного визуализатора.


## Комментарии


Доступные метаданные объекта можно
 получить в [консоли
 веб-сервисов](PPSOMService.chm::/Intro/WSC_Intro.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Выберем тип объекта
type = PP.Exp.Ui.EaxObjectType.BubbleChart;
// Зададим метаданные объекта
meta = {
    //  Метаданные объекта
};
// Установим метаданные объекта
eaxMdService.setEaxObjectMeta(eaxAnalyzer, type, meta);
В результате выполнения примера визуализатору пузырьковая диаграмма
 были установлены новые метаданные.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
