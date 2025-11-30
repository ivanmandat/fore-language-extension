# ICubeMetaUpdateEx.CopyExtraObjects

ICubeMetaUpdateEx.CopyExtraObjects
-


# ICubeMetaUpdateEx.CopyExtraObjects


## Синтаксис


CopyExtraObjects: Boolean;


## Описание


Свойство CopyExtraObjects определяет,
 нужно ли копировать вложенные объекты базы данных временных рядов, от
 которых она не зависит.


## Комментарии


Допустимые значения:


	- True. Объекты копируются;


	- False. База данных временных
	 рядов копируется без вложенных объектов.


Вложенными объектами являются:


	- объекты импорта/экспорта;


	- объекты валидации;


	- объекты моделирования (задачи, сценарии, метамодели,
	 модели);


	- экспресс-отчеты и регламентные отчеты;


	- пользовательские объекты.


## Пример


Использование свойства приведено в примере для [ICubeMetaUpdateEx.AutoPeriod](ICubeMetaUpdateEx.AutoPeriod.htm).


См. также:


[ICubeMetaUpdateEx](ICubeMetaUpdateEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
