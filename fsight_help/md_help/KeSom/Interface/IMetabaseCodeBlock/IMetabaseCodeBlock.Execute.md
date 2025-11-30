# IMetabaseCodeBlock.Execute

IMetabaseCodeBlock.Execute
-


# IMetabaseCodeBlock.Execute


## Синтаксис


Execute(SubName: String; Params: Array): Variant;


## Параметры


SubName. Наименование метода,
 который необходимо выполнить.


Params. Параметры, которые
 необходимы для выполнения.


## Описание


Метод Execute выполняет блок
 кода на Fore и возвращает результат выполнения.


## Комментарии


Метод не поддерживает выполнение одного и того же блока кода в [отдельных
 потоках](KeFore.chm::/Interface/IForeThread/IForeThread.htm). [Инициализируйте](../IMetabase/IMetabase.CreateCodeBlock.htm)
 новый блок кода для каждого нового потока.


## Пример


Для выполнения примера в репозитории предполагается наличие сборки с
 идентификатором ASM_CORE. В сборке имеется модуль, в котором реализована
 функция GenerateNumber.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    CodeBlock: IMetabaseCodeBlock;

	    Result: Variant;

	Begin

	    Mb := MetabaseClass.Active;

	    CodeBlock := Mb.CreateCodeBlock;

	    CodeBlock.References := "MathFin;ASM_CORE";

	    CodeBlock.Text :=

	        "Function Test(x, y: Integer): Integer;" + #13 + #10 +

	        "Var" + #13 + #10 +

	        "   n: Integer;" + #13 + #10 +

	        "Begin" + #13 + #10 +

	        "   n := GenerateNumber;" + #13 + #10 +

	        "   If (n>x) And (n<y) Then" + #13 + #10 +

	        "      Return Math.Int((y-x)/n);" + #13 + #10 +

	        "   Else" + #13 + #10 +

	        "      Return Math.Int(n/(y-x));" + #13 + #10 +

	        "   End If" + #13 + #10 +

	        "End Function Test;";

	    If CodeBlock.Valid Then

	        Result := CodeBlock.Execute("Test", 1, 10);

	        Debug.WriteLine(Result);

	    Else

	        Debug.WriteLine("При компиляции кода возникла ошибка.");

	        Debug.WriteLine("Текст ошибки: " + CodeBlock.ErrorMessage);

	        Debug.WriteLine("Строка: " + CodeBlock.Line.ToString);

	        Debug.WriteLine("Позиция: " + CodeBlock.Position.ToString);

	    End If;

	    Dispose CodeBlock;

	End Sub UserProc;


При выполнении примера будет создан объект, осуществляющий выполнение
 блока кода на Fore. Будет задан исполняемый код и осуществлена его синтаксическая
 проверка. Если код не содержит ошибок, то он будет выполнен. Выполнение
 осуществляется с указанными значениями параметров. Результат выполнения
 будет содержаться в переменной Result и выведен в консоль среды разработки.
 Если код содержит ошибки, то текст ошибки и место её возникновения будут
 выведены в консоль среды разработки. Для выполнения кода подключается
 системная сборка MathFin и пользовательская сборка ASM_CORE.


См. также:


[IMetabaseCodeBlock](IMetabaseCodeBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
