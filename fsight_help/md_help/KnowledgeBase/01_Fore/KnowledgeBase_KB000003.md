# Отладочная печать

Отладочная печать
-


# Отладочная печать


	Номер статьи: KB000003


## Общие сведения


	Связанные блоки:


		- [Fore](Fore.chm::/Fore_Title.htm)


		- [Разработка
		 прикладного приложения](uidevenv.chm::/01_Development_Environment/01_Purpose_of_the_constructor/Purpose_of_the_constructor.htm)


## Описание


	В системной сборке [System](foresys.chm::/interface/system_interface.htm)
	 имеется класс [Debug](foresys.chm::/class/debug/debug.htm),
	 предназначенный для вывода отладочной информации при выполнении модулей
	 или форм. Данный класс имеет несколько статических методов, решающих
	 разные задачи:


		- [Write](foresys.chm::/interface/idebug/idebug.write.htm),
		 [WriteLine](foresys.chm::/interface/idebug/idebug.writeline.htm).
		 Предназначены для вывода указанной строки. По умолчанию все отладочные
		 сообщения выводятся в панели «[Окно
		 консоли](uidevenv.chm::/01_development_environment/03_windows_of_development_environment/console_window.htm)» среды разработки.


		- [WriteIf](foresys.chm::/interface/idebug/idebug.writeif.htm),
		 [WriteLineIf](foresys.chm::/interface/idebug/idebug.writelineif.htm).
		 Предназначены для вывода указанной строки только при выполнении
		 заданного условия.


		- [Indent](foresys.chm::/interface/idebug/idebug.indent.htm),
		 [Unindent](foresys.chm::/interface/idebug/idebug.unindent.htm).
		 Предназначены для вывода указанной строки с отступом по отношению
		 к предыдущим, тем самым выделяя их.


		- [Assert](foresys.chm::/interface/idebug/idebug.assert.htm),
		 [Fail](foresys.chm::/interface/idebug/idebug.fail.htm).
		 Предназначены для отладки прикладных модулей.


	Метод Assert позволяет вставить
	 в код условие для проверки внутреннего состояния исполняемого кода.
	 Если код не соответствует заданному условию, то выводится сообщение
	 об этом. Часто разработчики пишут код процедур или функций исходя
	 из некоторых предположений о значениях их параметров. Данный метод
	 позволяет включить в код проверку этих предположений и уже на
	 этапе тестирования системы выявить проблемы, если они реально существуют.


	Метод Fail позволяет безусловно
	 сообщить о какой-то серьезной проблеме, возникшей при выполнении кода.


	Разработчики часто используют функцию [IWinApplicationClass.InformationBox](uilib.chm::/interface/iwinapplicationclass/iwinapplicationclass.informationbox.htm)
	 для вывода отладочных сообщений. Её использование может привести к
	 неработоспособности прикладной системы в веб-версии. Рекомендуется
	 учитывать и этот фактор при разработке прикладных систем.


## Пример


		Sub UserProc;

		Var

		    Value: Double;

		Begin

		    Debug.WriteLine("Hello, world!");

		    Value := Math.Rand;

		    Debug.Write("Random value: "); Debug.WriteLine(Value);

		    Debug.WriteLineIf(Value > 0.5, "Random value is greater than 0.5");

		    Debug.WriteLine("Indented random outputs");

		    Debug.Indent;

		    Try

		        Debug.WriteLine(Math.Rand);

		        Debug.WriteLine(Math.RandBetween(0, 100));

		    Finally

		        Debug.Unindent;

		    End Try;

		    Debug.Assert(Math.Rand > 0.5);

		    Debug.Fail("There is an serious failure in software");

		End Sub UserProc;


	В окно консоли будет выведено:


	Выполнение модуля начато


	Hello, world!


	Random value: 0,175467571750159


	Indented random outputs


	    0,64320357647799


	    11,6849231109221


	Assert failed


	There is an serious failure in software


	Выполнение модуля завершено


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
