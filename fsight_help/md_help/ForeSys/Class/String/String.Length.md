# String.Length

String.Length
-


# String.Length


## Синтаксис


Length: Integer;


## Описание


Свойство Length возвращает длину
 символьного значения, содержащегося в переменной.


## Пример


	Sub UserProc;

	Var

	    s, s1, s2: String;

	    L, L1, L2: Integer;

	Begin

	    s := "";

	    s1 := "ab cd";

	    s2 := "abcdefgkl";

	    L := s.Length;

	    L1 := s1.Length;

	    L2 := s2.Length;

	End Sub UserProc;


После выполнения примера переменные «L», «L1»
 и «L2» будут иметь следующие значения: «0», «5» и «9» соответственно.


См. также:


[String](String.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
