# ITabPageSettings.TitleColumnsScope

ITabPageSettings.TitleColumnsScope
-


# ITabPageSettings.TitleColumnsScope


## Синтаксис


TitleColumnsScope: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство TitleColumnsScope определяет
 диапазон окончания действия сквозных столбцов.


## Комментарии


Диапазон сквозных столбцов задается в свойстве [TitleColumns](ITabPageSettings.TitleColumns.htm).
 По умолчанию свойство TitleColumnsScope
 не определено, при этом сквозные столбцы выводятся на всех страницах.
 В качестве значения свойства TitleColumnsScope
 необходимо указать столбец, расположенный на странице, которая будет являться
 последней выводимой вместе со сквозными столбцами. Если в свойстве [TitleColumns](ITabPageSettings.TitleColumns.htm)
 указан составной диапазон сквозных столбцов, то в свойстве TitleColumnsScope
 также может быть указан составной диапазон, который будет ограничивать
 каждую из частей сквозных столбцов. Все последующие страницы будут выведены
 без указания данных сквозных столбцов.


## Пример


Пример использования приведен в описании свойства [ITabPageSettings.TitleColumns](ITabPageSettings.TitleColumns.htm).


См. также:


[ITabPageSettings](ITabPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
