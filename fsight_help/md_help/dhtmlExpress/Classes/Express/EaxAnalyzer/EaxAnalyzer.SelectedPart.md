# EaxAnalyzer.SelectedPart

EaxAnalyzer.SelectedPart
-


# EaxAnalyzer.SelectedPart


## Синтаксис


SelectedPart : Object;


## Описание


Свойство SelectedPart определяет
 выделенную область таблицы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSelectedPart,
 а возвращается с помощью метода getSelectedPart.


Настройки оформления таблицы через боковую панель будет применены только
 к выделенной области таблицы.


Наименования областей представлены в перечислении [PP.Exp.Ui.EaxTablePart](../../../Enums/PP.Exp.Ui.EaxTablePart.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


var eaxAnalyzer = expressBox.getSource();
// Получим выделенную область таблицы
part = eaxAnalyzer.getSelectedPart();
// Выведем наименование области в консоль
console.log(part.part);

В результате выполнения примера в консоль было выведено наименование
 выделенной области таблицы.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
