# IInMemManager.CheckHasMatrix

IInMemManager.CheckHasMatrix
-


# IInMemManager.CheckHasMatrix


## Синтаксис


CheckHasMatrix(Dest: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm)):
 Boolean;


## Параметры


Dest. Отстроенный вариант отображения
 куба.


## Описание


Метод CheckHasMatrix осуществляет
 проверку и возвращает наличие в кеше кешированных данных для указанного
 варианта отображения куба.


## Комментарии


Метод возвращает значение True,
 если в кеше имеются данные и False,
 если указанный вариант отображения куба не был кеширован. Кешированные
 данные могут быть получен с помощью метода [GetMatrix](IInMemManager.GetMatrix.htm).


## Пример


Пример использования приведён в описании метода [IInMemManager.GetMatrix](IInMemManager.GetMatrix.htm).


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
