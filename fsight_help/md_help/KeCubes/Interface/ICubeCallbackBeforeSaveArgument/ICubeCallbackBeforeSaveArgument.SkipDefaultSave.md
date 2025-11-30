# ICubeCallbackBeforeSaveArgument.SkipDefaultSave

ICubeCallbackBeforeSaveArgument.SkipDefaultSave
-


# ICubeCallbackBeforeSaveArgument.SkipDefaultSave


## Синтаксис


		SkipDefaultSave: Boolean;


## Описание


Свойство SkipDefaultSave определяет
 признак пропуска выполнения системного механизма сохранения данных.


## Комментарии


При сохранении данных системный механизм формирует необходимые запросы
 и выполняет транзакцию для вставки/обновления данных в СУБД. По умолчанию
 свойству установлено значение False,
 при этом выполняется сохранение данных в СУБД.


Если необходимо отменить сохранения данных в СУБД или изменить его путём
 написания собственного прикладного алгоритма сохранения данных, то установите
 свойству SkipDefaultSave значение
 True. При этом событие [OnAfterSave](../ICubeSaveMatrixCallback/ICubeSaveMatrixCallback.OnAfterSave.htm) сгенерировано не будет.


## Пример


Пример использования приведён в описании [ICubeInstanceStorage.SaveMatrixCallback](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixCallback.htm).


См. также:


[ICubeCallbackBeforeSaveArgument](ICubeCallbackBeforeSaveArgument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
