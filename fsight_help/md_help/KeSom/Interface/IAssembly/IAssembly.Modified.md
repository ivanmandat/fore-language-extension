# IAssembly.Modified

IAssembly.Modified
-


# IAssembly.Modified


## Синтаксис


Modified: Boolean;


## Описание


Свойство Modified определяет
 признак наличия несохраненных изменений в сборке.


## Комментарии


Свойство возвращает True, если
 в сборке имеются не сохраненные изменения.


## Пример


Для выполнения примера в репозитории предполагается наличие сборки с
 идентификатором ASSEMBY_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Asm: IAssembly;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ASSEMBLY_1").Edit;

	    Asm := MObj As IAssembly;

	    Asm.References := "Dt;Etl;Io";

	    If Asm.Modified Then

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера для сборки будет изменен список ссылок на системные
 сборки.


См. также:


[IAssembly](IAssembly.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
