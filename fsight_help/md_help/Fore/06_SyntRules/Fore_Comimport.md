# Оператор Comimport

Оператор Comimport
-


# Оператор Comimport


Оператор ComImport предназначен
 для импорта описаний классов и интерфейсов из библиотек (dll) и библиотек
 типов (tlb). После ключевого слова From
 указывается строка с GUID библиотеки или путь и наименование библиотеки
 типов, из которой производится импорт описаний. Можно импортировать интерфейсы
 с ключевым словом Interface или
 классы с ключевым словом Class.
 Для каждого интерфейса импортируются все методы и свойства, для которых
 не указаны атрибуты Restricted
 или Hidden.


Для импортированных классов можно создавать объекты с помощью оператора
 New. При этом будет создан экземпляр
 COM-объекта. Обращение к методам объекта, а также к методам интерфейсов,
 которые реализуются COM-объектами, приводит к вызову соответствующих методов
 COM-объектов.


## Пример


Рассмотрим пример реализации COM-объекта в проекте на языке C# и его
 дальнейшее использование в языке Fore.


Создайте новый проект консольного приложения в среде разработки Microsoft
 Visual Studio, назовите его, например, TestCom. Задайте для проекта следующие
 настройки:


	- На вкладке «Application»
	 в раскрывающемся списке «Output type»
	 выберите тип «Class Library».


	- На вкладке «Build» установите
	 флажок «Register for COM interop».


	- На вкладке «Build Events»
	 в поле «Post-build event command
	 line» добавьте команды:


		- "C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX
		 4.7.2 Tools\TlbExp.exe" $(TargetPath) /win64


		- "C:\Windows\Microsoft.NET\Framework64\v4.0.30319\RegAsm.exe"
		 $(TargetPath)


Сгенерированный по умолчанию код в модуле Program.cs замените следующим
 кодом на C#:


using System;
using System.Runtime.InteropServices;
namespace TestCom
{
    [Guid("33BE5927-0438-4505-A81F-76E09AFE7669")]
    [ComVisible(true)]
    public interface ITest
    {
        int TestSumm(int a, int b);
    }
    [Guid("BC528177-3B14-4D47-9C2D-E69B6045CC62")]
    [ClassInterface(ClassInterfaceType.None), ComSourceInterfaces(typeof(ITest))]
    [ComVisible(true)]
    public class Test : ITest
    {
        public int TestSumm(int a, int b)
        {
            return a + b;
        }
    }
}
GUID'ы для интерфейса и класса можно заменить новыми. После компилирования
 проекта созданная библиотека будет зарегистрирована в реестре, а в подкаталоге
 \TestCom\TestCom\bin\Debug\ будут доступны файлы TestCom.dll и TestCom.tlb.


Для работы с COM-объектом из Fore скопируйте полученный dll-файл в папку
 установки «Форсайт. Аналитическая платформа»,
 а в коде на форе пропишите путь к tlb-файлу, например:


	Comimport From "d:\Work\TestCom\TestCom\bin\Debug\TestCom.tlb"

	    Interface ITest;

	    Class Test: Object, ITest

	    End Class Test;

	 End Comimport;


	 Sub Main;

	 Var

	    a: Test;

	    i: Integer;

	 Begin

	    a := New Test.Create;

	    Try

	        i := a.TestSumm(1, 9);

	        Debug.WriteLine(i.ToString);

	    Except

	        Debug.WriteLine("Ошибка при выполнении функции TestFunction");

	    End Try;

	 End Sub Main;


После выполнения примера будет выполнена функция TestSumm. Если функция
 вернула корректное значение, то полученное значение будет выведено в консоль
 среды разработки, иначе будет выведено сообщение об ошибке.


Также, используя GUID созданной библиотеки, который доступен в файле
 AssemblyInfo.cs проекта на C#, оператор Comimport
 можно переписать следующим образом:


	Comimport From "{ef6d37f5-ee50-4029-929f-e31e92e9164d}"

	    Interface ITest;

	    Class Test: Object, ITest

	    End Class Test;

	 End Comimport;


См. также:


[Руководство
 по языку Fore](../Fore_Title.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
