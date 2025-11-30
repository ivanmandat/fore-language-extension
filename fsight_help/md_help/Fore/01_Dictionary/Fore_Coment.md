# Комментарии: Fore

Комментарии: Fore
-


# Комментарии


Комментарии используются для пояснения различных участков кода. В Fore
 используются однострочные (//...), многострочные ({...}) и XML-комментарии
 (/// <summary>.../// </summary>). Комментарии не влияют на
 смысл самой программы и не используются компилятором.


[XML-комментарии](uidevenv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Automatic_substitutions.htm#xml)
 могут использоваться для документирования различных блоков кода, например
 процедур/функций/классов и других блоков кода. Кроме тега <summary>
 могут быть указаны любые другие теги, например теги HTML-разметки или
 собственные теги, позволяющие в дальнейшем получить XML-структуру комментария
 нужного формата. Значения комментариев можно будет получить в прикладном
 коде, используя свойство XMLDocumentation интерфейсов [IForeClass](KeFore.chm::/Interface/IForeClass/IForeClass.htm),
 [IForeProperty](KeFore.chm::/Interface/IForeProperty/IForeProperty.htm),
 [IForeSub](KeFore.chm::/Interface/IForeSub/IForeSub.htm).


	//  пример однострочного комментария

	{

	    пример

	    многострочного

	    комментария

	}

	{  Многострочный комментарий, расположенный в одной строке  }


	/// <summary>

	/// Проверка работы операции Mod, которая возвращает остаток от деления двух чисел

	/// </summary>

	/// <param name="a">Делимое</param>

	/// <param name="b">Делитель</param>

	/// <returns>Остаток от деления</returns>

	Function TestMod(a: Double; b: Double): Double;

	Begin

	    Return a Mod b;

	End Function TestMod;


См. также:


[Руководство
 по языку Fore](../Fore_Title.htm) | [Константы](../02_GeneralInfo/Fore_GenIng_Const.htm)
 | [Переменные](../02_GeneralInfo/Fore_GenInf_Vars.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
