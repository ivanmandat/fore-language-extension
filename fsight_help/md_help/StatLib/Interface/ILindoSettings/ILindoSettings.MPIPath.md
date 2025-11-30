# ILindoSettings.MPIPath

ILindoSettings.MPIPath
-


# ILindoSettings.MPIPath


## Синтаксис


MPIPath: String;


## Описание


Свойство MPIPath определяет
 путь, по которому будет производиться выгрузка файла со сформированной
 задачей LINDO.


## Комментарии


Путь должен содержать наименование файла задачи с расширением *.mpi.


Если путь не задан, то выгрузка задачи не выполняется.


В дальнейшем созданный файл может быть использован для повторного расчета
 задачи с помощью метода [ISmNonLinearOptimization.ExecuteFromMPI](../ISmNonLinearOptimization/ISmNonLinearOptimization.ExecuteFromMPI.htm).


## Пример


Использование свойства приведено в примере для [ISmNonLinearOptimization.LindoSettings](../ISmNonLinearOptimization/ISmNonLinearOptimization.LindoSettings.htm).


См. также:


[ILindoSettings](ILindoSettings.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
