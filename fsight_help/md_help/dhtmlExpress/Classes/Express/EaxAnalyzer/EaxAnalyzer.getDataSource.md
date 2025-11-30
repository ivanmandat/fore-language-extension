# EaxAnalyzer.getDataSource

EaxAnalyzer.getDataSource
-


# EaxAnalyzer.getDataSource


## Синтаксис


getDataSource(key: Number);


## Параметры


key. Ключ источника данных.


## Описание


Метод getDataSource возвращает
 источник данных по ключу.


## Комментарии


Ключ источника соответствует порядковому номеру источника данных, например
 первый подключенный источник данных имеет ключ 1.


При указании в качестве параметра несуществующего
 ключа, будет возвращен первый источник данных, имеющий ключ 1.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Определим объект первого
 источника данных:


// Получим первый источник данных
eaxAnalyzer.getDataSource(1);
// -> Object {k: 1, id: "CUBE_SEP", n: "Куб показателей", vis: true, cube: Object}
В результате выполнения примера в консоль был выведен объект первого
 источника данных.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
