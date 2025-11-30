# EaxAnalyzer.getTableParts

EaxAnalyzer.getTableParts
-


# EaxAnalyzer.getTableParts


## Синтаксис


getTableParts() : Array of Objects;


## Описание


Метод getTableParts возвращает
 массив всех областей таблицы.


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
// Получим все области таблицы
parts = eaxAnalyzer.getTableParts();
// Выведем наименование областей в консоль
for (var i = 0; i < parts.length; i++) {
    console.log(parts[i].part + " " + (parts[i].dimKey ? parts[i].dimKey : ""));
};

В результате выполнения примера в консоль были выведены наименования
 всех областей таблицы.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
