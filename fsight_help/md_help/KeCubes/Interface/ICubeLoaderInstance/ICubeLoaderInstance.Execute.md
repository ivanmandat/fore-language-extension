# ICubeLoaderInstance.Execute

ICubeLoaderInstance.Execute
-


# ICubeLoaderInstance.Execute


## Синтаксис


Execute(


Selection: [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm);


[Progress: [ICubeProgress](../ICubeProgress/ICubeProgress.htm)
 = Null;]


[Options: [AutoCubeUpdateOption](../../Enums/AutoCubeUpdateOption.htm)
 = 0]): [ICubeOperationResult](../ICubeOperationResult/ICubeOperationResult.htm);


## Параметры


Selection. Отметка элементов куба-приёмника, по которым
 будет осуществляться загрузка данных.


Progress. Необязательный параметр,
 определяющий объект, используемый для отслеживания процесса загрузки.
 Данный параметр не поддерживается.


Options. Необязательный параметр,
 определяющий способ проверки данных при сохранении. В качестве значения
 параметра указывается одно, либо комбинация, значений перечислимого типа
 [AutoCubeUpdateOption](../../Enums/AutoCubeUpdateOption.htm).
 Значения в списке разделяются с помощью ключевого слова Or.


## Описание


Метод Execute осуществляет загрузку
 данных в куб-приёмник в соответствии с отметкой, передаваемой посредством
 параметра Selection.


## Пример


Использование свойства приведено в примере для [ICubeLoaderInstance.Destination](ICubeLoaderInstance.Destination.htm).


См. также:


[ICubeLoaderInstance](ICubeLoaderInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
