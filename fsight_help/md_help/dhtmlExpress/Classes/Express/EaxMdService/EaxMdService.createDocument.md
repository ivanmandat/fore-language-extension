# EaxMdService.createDocument

EaxMdService.createDocument
-


**


# EaxMdService.createDocument


## Синтаксис


createDocument(parentkey: Number, name: String, id: String, callback:function|PP.Delegate);


## Параметры


*parentkey.* Ключ экспресс-отчета;


*name.* Наименование создаваемого документа;


*id.* Идентификатор документа;


*callback.* Возвратная функция.


## Описание


Метод createDocument** создает документ экспресс-отчета.


## Комментарии


Метод возвращает объект типа PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm).


## Пример


Воспользуемся примером, приведённым на странице «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)». Заменим строку сценария


var eaxAnalyzer = eaxMdService.open(108);

на следующую:


var eaxAnalyzer = eaxMbService.createDocument(0, "New Document");

В результате выполнения примера будет создан контейнер экспресс-отчёта с новым документом.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
