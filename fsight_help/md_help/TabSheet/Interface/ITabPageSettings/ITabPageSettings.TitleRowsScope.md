# ITabPageSettings.TitleRowsScope

ITabPageSettings.TitleRowsScope
-


# ITabPageSettings.TitleRowsScope


## Синтаксис


TitleRowsScope: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство TitleRowsScope определяет
 диапазон окончания действия сквозных строк.


## Комментарии


Диапазон сквозных строк задается в свойстве [TitleRows](ITabPageSettings.TitleRows.htm). По умолчанию
 свойство TitleRowsScope не определено,
 при этом сквозные строки выводятся на всех страницах. В качестве значения
 свойства TitleRowsScope необходимо
 указать строку, расположенную на странице, которая будет являться последней
 выводимой вместе со сквозными строками. Если в свойстве [TitleRows](ITabPageSettings.TitleRows.htm) указан
 составной диапазон сквозных строк, то в свойстве TitleRowsScope
 также может быть указан составной диапазон, который будет ограничивать
 каждую из частей сквозных строк. Все последующие страницы будут выведены
 без указания данных сквозных строк.


## Пример


Пример использования приведен в описании свойства [ITabPageSettings.TitleRows](ITabPageSettings.TitleRows.htm).


См. также:


[ITabPageSettings](ITabPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
