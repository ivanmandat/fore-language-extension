# ICubeLoaderDimensionBinding.LoadEmptyValues

ICubeLoaderDimensionBinding.LoadEmptyValues
-


# ICubeLoaderDimensionBinding.LoadEmptyValues


## Синтаксис


LoadEmptyValues: Boolean;


## Описание


Свойство LoadEmptyValues определяет
 признак загрузки пустых значений.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом осуществляется загрузка строк с пустыми значениями. Вместо пустых
 значений в измерении будет создан элемент с наименованием «Null»
 или с наименованием, которое определено в свойстве [EmptyValueReplacement](ICubeLoaderDimensionBinding.EmptyValueReplacement.htm).


При установке значения False
 строки с пустыми значениями будут пропускаться.


## Пример


Пример использования приведен в описании свойства [ICubeLoaderDimensionBinding.NewDictionaryName](ICubeLoaderDimensionBinding.NewDictionaryName.htm).


См. также:


[ICubeLoaderDimensionBinding](ICubeLoaderDimensionBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
