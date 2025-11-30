# PythonInvokeModule_

PythonInvokeModule_
-


# PythonInvokeModule_


## Синтаксис


PythonInvokeModule_(ModuleId: String, FunctionName:
 String, Params: Array)


## Параметры


ModuleId.
 Идентификатор Python-модуля в репозитории;


FunctionName. Наименование
 выполняемой функции. Значение параметра является регистрозависимым;


Params. Параметры, передаваемые
 в функцию. Значения параметров функции могут быть переданы в виде отдельного
 массива или перечислены через запятую. Если выполняемая функция не содержит
 входных параметров, то Params
 можно не указывать.


## Описание


Метод PythonInvokeModule_
 выполняет функцию, хранящуюся в [Python-модуле](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm),
 и возвращает результат её работы.


## Комментарии


При формировании формул недоступно использование [именованных
 параметров](KePython.chm::/Intro/Use_Assembly_Python_In_Programm.htm#namedparameter).


## Пример


Рассмотрим код на Python, содержащийся в Python-модуле с идентификатором
 MOD_PYT:


def calculate(a, b)
    return b%a+a
def check(value)
    if (value>1000):
        return 1
    else
        return 0
В таблице приведены примеры формул с использованием функции PythonInvokeModule:


		 Формула
		 Результат
		 Описание


		 =PythonInvokeModule("MOD_PYT", "calculate",
		 4, 40)
		 4
		 Вызов функции «calculate» из Python-модуля в репозитории с
		 идентификатором MOD_PYT. В качестве значения параметров передаются
		 фиксированные значения.


		 =PythonInvokeModule("MOD_PYT", "check",
		 C3)
		 1 или 0
		 Вызов функции «check» из Python-модуля в репозитории с идентификатором
		 MOD_PYT. В качестве значения параметра передаётся значение ячейки
		 C3. Если значение ячейки больше 1000, то возвращается 1, иначе
		 - 0.


См. также:


[Функции, доступные в редакторе
 выражения](../../Expression_editor_func.htm) | [Работа с Python](Func_Python.htm) | [Python.InvokeModule](KePython.chm::/Class/Python/Python.InvokeModule.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
