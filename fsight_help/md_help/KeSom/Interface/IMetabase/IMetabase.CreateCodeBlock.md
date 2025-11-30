# IMetabase.CreateCodeBlock

IMetabase.CreateCodeBlock
-


# IMetabase.CreateCodeBlock


## Синтаксис


		CreateCodeBlock: [IMetabaseCodeBlock](../IMetabaseCodeBlock/IMetabaseCodeBlock.htm);


## Описание


Метод CreateCodeBlock возвращает
 объект, содержащий код на Fore.


## Пример


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Block: IMetabaseCodeBlock;

		    a: Array;

		    v: Variant;

		Begin

		    Mb := MetabaseClass.Active;

		    Block := Mb.CreateCodeBlock;

		    Block.References := "MathFin";

		    Block.Text := "Sub M;" + #10 +

		        "Begin" + #10 +

		        " Debug.WriteLine(Math.Round(100.959, 2).ToString);" + #10 +

		        "End Sub M;" ;

		    If Block.Valid Then

		        v := Block.Execute("M", a);

		    Else

		        Debug.WriteLine(Block.ErrorMessage + ". строка " + Block.Line.ToString + ". позиция " + Block.Position.ToString);

		    End If;

		    Dispose Block;

		End Sub UserProc;


После выполнения примера в переменной «Block» будет содержаться объект,
 представляющий собой блок кода на Fore.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
