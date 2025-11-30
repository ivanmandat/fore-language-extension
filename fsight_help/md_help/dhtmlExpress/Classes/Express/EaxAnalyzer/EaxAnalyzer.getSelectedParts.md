# EaxAnalyzer.getSelectedParts

EaxAnalyzer.getSelectedParts
-


# EaxAnalyzer.getSelectedParts


## Синтаксис


getSelectedParts() : Array of Objects;


## Описание


Метод getSelectedParts возвращает
 массив областей таблицы, входящих в текущее выделение.


## Комментарии


Метод возвращает массив объектов, содержащий информацию о выделенной
 области. Для измерений в информацию входит ключ измерения.


Наименования областей представлены в перечислении [PP.Exp.Ui.EaxTablePart](../../../Enums/PP.Exp.Ui.EaxTablePart.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


var eaxAnalyzer = expressBox.getSource();
// Получим выделенные области таблицы
parts = eaxAnalyzer.getSelectedParts();
// Выведем наименование областей в консоль
for (var i = 0; i < parts.length; i++) {
    console.log(parts[i].part);
};

В результате выполнения примера в консоль были выведены наименования
 выделенных областей.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
