# Руководство по языку Fore

Руководство по языку Fore
-


# Руководство по языку Fore


Язык Fore, используемый в «Форсайт. Аналитическая платформа»,
 является полноценным объектно-ориентированным языком программирования.
 Любая программа на данном языке состоит из одного или нескольких модулей.
 Модули могут быть подключены друг к другу по ссылке или объединены в сборки.
 Каждый модуль содержит программный код, состоящий из отдельных конструкций
 и предназначенный для решения определённого класса задач (возможно, в
 составе другой более общей задачи). За счёт разделения программного кода
 на модули удаётся обеспечить компонентную ориентированность языка и переиспользование
 программного кода.


## Структура программы


Программный код реализуется в глобальном пространстве имён модуля. Может
 включать в себя блоки описания [констант](02_GeneralInfo/Fore_GenIng_Const.htm),
 [переменных](02_GeneralInfo/Fore_GenInf_Vars.htm), а также
 следующие конструкции:


	- [пространства имён](06_SyntRules/Fore_Namespace.htm);


	- [интерфейсы](06_SyntRules/Fore_Interfaces.htm);


	- [классы](02_GeneralInfo/Fore_ClassesAndObjects.htm);


	- [перечисления](06_SyntRules/Fore_Enums.htm);


	- [процедуры и
	 функции](06_SyntRules/Fore_Synt_ProcAndFunc.htm).


Конструкции могут состоять из одного или нескольких блоков кода. Отдельные
 блоки кода располагаются между ключевыми словами и имеют определённое
 назначение. Например, блоки констант и переменных начинаются с ключевых
 слов Const и Var
 соответственно. Окончанием для данных блоков будет любое ключевое слово,
 соответствующее началу следующего блока или конструкции. Исполняемый код
 располагается в процедурах/функциях/свойствах между ключевыми словами
 Begin...End и может содержать
 другие конструкции/блоки кода.


Программа может содержать [точку
 входа](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/entry_point.htm) - процедуру Main, которая будет выполняться при
 запуске модуля/сборки.


При разработке кода довольно часто приходится набирать однотипные структуры
 (процедуры, функции, циклы и т.п.) в теле макроса, состоящие в основном
 из ключевых слов языка и различных наименований. Для уменьшения объема
 кода, набираемого вручную, в языке предусмотрена [автоматическая
 подстановка](UiDevEnv.chm::/01_Development_Environment/03_Windows_of_Development_Environment/Automatic_substitutions.htm) таких структур. Также в языке организована
 автозамена всех ключевых слов языка: ключевые слова пишутся прописными
 буквами с заглавной первой буквой и имеют цветовое оформление, задаваемое
 в [настройках
 редактора кода](Developer.chm::/About_Developing/Development_Environment_Options.htm).


Для быстрого освоения языка ниже
 представлен ряд статей, предназначенных для ознакомления с основными видами
 конструкций языка, их назначением, синтаксисом и принципом использования:


	- [Комментарии](01_Dictionary/Fore_Coment.htm);


	- [Константы](02_GeneralInfo/Fore_GenIng_Const.htm);


	- [Переменные](02_GeneralInfo/Fore_GenInf_Vars.htm);


	- [Область видимости](06_SyntRules/Fore_Synt_Visible.htm);


	- [Типы данных](03_dataTypes/Fore_DataTypes.htm);


	- [Преобразования
	 типов (As, Is)](07_Operations/Operations_of_the_creation_object.htm);


	- [Унарные операции](07_Operations/Unary_operations.htm);


	- [Арифметические операции](07_Operations/Arithmetical_operations.htm);


	- [Операции отношения](07_Operations/Operations_relations.htm);


	- [Логические операции](07_Operations/Logical_operations.htm);


	- [Условные операторы](08_Operators/Fore_If.htm);


	- [Циклические операторы](08_Operators/Fore_For.htm);


	- [Операторы перехода](08_Operators/Fore_Break.htm);


	- [Оператор With](08_Operators/Fore_With.htm);


	- [Оператор Comimport](06_SyntRules/Fore_Comimport.htm);


	- [Оператор Pyimport](08_Operators/Pyimport.htm);


	- [Оператор Dispose](08_Operators/fore_dispose.htm);


	- [Пространства имён](06_SyntRules/Fore_Namespace.htm);


	- [Процедуры и функции](06_SyntRules/Fore_Synt_ProcAndFunc.htm):


		- [Формальные параметры](06_SyntRules/Fore_FormalParams.htm).


	- [Классы и объекты](02_GeneralInfo/Fore_ClassesAndObjects.htm):


		- [Создание объектов](05_Classes/NewObject.htm);


		- [Свойства класса](06_SyntRules/Description_Property.htm);


		- [Делегаты и события](06_SyntRules/Fore_Deleg.htm).


	- [Интерфейсы](06_SyntRules/Fore_Interfaces.htm);


	- [Перечисления](06_SyntRules/Fore_Enums.htm);


	- [Массивы](06_SyntRules/Fore_SyntArrays.htm);


	- [Сообщения компилятора
	 Fore](11_Compiler_Errors/compiler_errors.htm);


	- [Исключительные
	 ситуации](10_Processing_Exceptions/processing_the_exceptions.htm):


		- [Системные
		 классы исключительных ситуаций](10_Processing_Exceptions/built_in_classes_of_the_exceptions.htm).


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
