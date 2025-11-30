# Dictionary.getLocales

Dictionary.getLocales
-


# Dictionary.getLocales


## Синтаксис


getLocales();


## Описание


Метод getLocales возвращает
 массив идентификаторов доступных локалей справочника НСИ.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ):


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим список идентификаторов доступных локалей
console.log("Доступные локали: " + source.getLocales());
В результате выполнения примера были получены идентификаторы доступных
 локалей справочника НСИ.


См. также:


[Dictionary](Dictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
