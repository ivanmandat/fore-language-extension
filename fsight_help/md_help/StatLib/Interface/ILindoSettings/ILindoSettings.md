# ILindoSettings

ILindoSettings
-


# ILindoSettings


Сборка: Stat;


## Описание


Интерфейс ILindoSettings предназначен
 для настройки параметров модуля LINDO.


## Иерархия наследования


           ILindoSettings


## Комментарии


Модуль LINDO - это программное обеспечение для целочисленного программирования,
 линейного программирования, нелинейного программирования, стохастического
 программирования, глобальной оптимизации.


Примечание.
 Для использования модуля LINDO его необходимо предварительно установить.
 Получить подробную информацию о модуле LINDO и его условиях его использования
 можно на сайте [www.lindo.com](http://www.lindo.com/).


Для получения параметров модуля LINDO используйте свойство [ISmNonLinearOptimization.LindoSettings](../ISmNonLinearOptimization/ISmNonLinearOptimization.LindoSettings.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisposeLindoModelAfterExecute](ILindoSettings.DisposeLindoModelAfterExecute.htm)
		 Свойство DisposeLindoModelAfterExecute
		 определяет, удалять ли модель LINDO сразу после выполнения.


		 ![](../../Property.gif)
		 [DLLPath](ILindoSettings.DLLPath.htm)
		 Свойство DLLPath
		 определяет путь до библиотеки LINDO.


		 ![](../../Property.gif)
		 [EnvParams](ILindoSettings.EnvParams.htm)
		 Свойство EnvParams
		 возвращает параметры среды LINDO.


		 ![](../../Property.gif)
		 [LicensePath](ILindoSettings.LicensePath.htm)
		 Свойство LicensePath
		 определяет путь к лицензии LINDO.


		 ![](../../Property.gif)
		 [MessageString](ILindoSettings.MessageString.htm)
		 Свойство MessageString
		 возвращает текст ошибки LINDO, возникшей при расчете.


		 ![](../../Property.gif)
		 [ModelParams](ILindoSettings.ModelParams.htm)
		 Свойство ModelParams
		 возвращает параметры модели LINDO.


		 ![](../../Property.gif)
		 [MPIPath](ILindoSettings.MPIPath.htm)
		 Свойство MPIPath
		 определяет путь, по которому будет производиться выгрузка файла
		 со сформированной задачей LINDO.


		 ![](../../Property.gif)
		 [nErrorCode](ILindoSettings.nErrorCode.htm)
		 Свойство nErrorCode
		 возвращает код ошибки LINDO, возникшей при расчете.


		 ![](../../Property.gif)
		 [ProblemResultType](ILindoSettings.ProblemResultType.htm)


		 Свойство ProblemResultType
		 определяет тип решения, который должен быть получен.


		 ![](../../Property.gif)
		 [ProblemResultWhichType](ILindoSettings.ProblemResultWhichType.htm)
		 Свойство ProblemResultWhichType
		 определяет тип задачи, решение которой должно быть извлечено.


		 ![](../../Property.gif)
		 [ProblemType](ILindoSettings.ProblemType.htm)
		 Свойство ProblemType
		 определяет тип решаемой задачи.


		 ![](../../Property.gif)
		 [SolverType](ILindoSettings.SolverType.htm)


		 Свойство SolverType
		 определяет метод решения.


		 ![](../../Property.gif)
		 [Warnings](ILindoSettings.Warnings.htm)


		 Свойство Warnings
		 возвращает предупреждения LINDO, возникшие при расчете.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [GetDouLindoInfo](ILindoSettings.GetDouLindoInfo.htm)
		 Метод GetDouLindoInfo
		 возвращает указанную вещественную информацию о методе расчета.


		 ![](../../Sub.gif)
		 [GetIntLindoInfo](ILindoSettings.GetIntLindoInfo.htm)
		 Метод GetIntLindoInfo
		 возвращает указанную целочисленную информацию о методе расчета.


		 ![](../../Sub.gif)
		 [GetStrLindoInfo](ILindoSettings.GetStrLindoInfo.htm)


		 Метод GetStrLindoInfo
		 возвращает указанную строковую информацию о методе расчета.


См. также:


[Интерфейсы
 сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
