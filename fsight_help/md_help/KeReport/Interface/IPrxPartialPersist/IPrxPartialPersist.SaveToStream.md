# IPrxPartialPersist.SaveToStream

IPrxPartialPersist.SaveToStream
-


# IPrxPartialPersist.SaveToStream


## Синтаксис


SaveToStream(Options: Integer; Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Options. Параметр
 зарезервирован на будущее. Следует
 передавать «0».


Stream. Поток, в который будет
 сохранен отчет.


## Описание


Метод SaveToStream сохраняет
 отчет в поток и освобождает память.


## Комментарии


Метод позволяет произвести частичную выгрузку в поток с освобождением
 занимаемой памяти. Освобождаться будут листы регламентного отчета с размещенными
 на них объектами (графики, диаграммы и т.д.). Метод используется совместно
 с [IPrxPartialPersist.LoadFromStream](IPrxPartialPersist.LoadFromStream.htm).


## Пример


Использование метода приведено в примере для [IPrxPartialPersist.LoadFromStream](IPrxPartialPersist.LoadFromStream.htm).


См. также:


[IPrxPartialPersist](IPrxPartialPersist.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
