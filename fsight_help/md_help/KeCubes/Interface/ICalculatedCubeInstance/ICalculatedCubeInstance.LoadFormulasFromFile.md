# ICalculatedCubeInstance.LoadFormulasFromFile

ICalculatedCubeInstance.LoadFormulasFromFile
-


# ICalculatedCubeInstance.LoadFormulasFromFile


## Синтаксис


LoadFormulasFromFile(FileName: String; [Append:
 Boolean = False]);


## Параметры


FileName. Наименование и путь к файлу, из которого
 загружаются формулы вычисляемого куба.


Append.
 Необязательный параметра, определяющий будут ли добавляться формулы к
 уже имеющимся в кубе.


## Описание


Метод LoadFormulasFromFile осуществляет
 загрузку формул вычисляемого куба из файла.


## Комментарии


По умолчанию в параметре Append
 передаётся значение False, при
 этом перед загрузкой удаляются все имеющиеся формулы. Если параметру установлено
 значение True, то в кубе будут
 заменены формулы только по тем координатам, которые имеются в файле, остальные
 формулы сохраняются.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    CubeInst.LoadFormulasFromFile("D:\Work\formul.txt", True);

    CubeInst.SaveFormulas;

End Sub UserProc;


После выполнения примера в куб будут загружены формулы из файла "formul.txt".
 Формулы по координатам, имеющимся в файле, будут заменены, остальные формулы
 сохраняются.


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
