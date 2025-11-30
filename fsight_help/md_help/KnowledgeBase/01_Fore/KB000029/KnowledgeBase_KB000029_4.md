# Сборка мусора

Сборка мусора
-


# Сборка мусора


При работе с языком Fore в «Форсайт. Аналитическая платформа»
 реализована сборка мусора, позволяющая удалять неиспользуемые объекты,
 освобождая тем самым память компьютера. Сборщик мусора запускается автоматически
 при простоях системы.


Если работа с ресурсами языка Fore осуществляется в сторонних средах
 разработки, то управление очисткой памяти возлагается на прикладного разработчика.
 Для запуска процесса существуют следующие методы интерфейса Prognoz.Platform.Interop.Fore.IForeRuntime:


	- CollectFullGarbage.
	 Запуск циклической очистки памяти, при которой будут удалены все неиспользуемые
	 объекты, а также объекты, которые с ними связаны, но более не используются.
	 Метод выполняется до тех пор, пока его алгоритм находит и удаляет
	 какие-либо неиспользуемые объекты. (Выполнение данного метода может
	 занять длительное время);


	- CollectGarbage. Выполняет
	 один цикл очистки памяти. Возвращает значение True,
	 если были удалены какие-либо объекты. В выходном параметре Check
	 будет содержаться значение True,
	 если метод отработал без ошибок.


Также можно использовать методы, запускающие сборку мусора, которая
 будет выполняться асинхронно в отдельном потоке:


	- RequestFullClean. Запуск
	 процесса сборки мусора с возможностью ограничить время выполнения.
	 Если за указанное время вся проверка и очистка не будет закончена,
	 то процесс будет прерван и продолжен в дальнейшем при наступлении
	 необходимых для этого условий;


	- RequestPartitialClean.
	 Выполняет один цикл очистки памяти.


Вызов данных методов должен производиться в рамках соединения с репозиторием,
 с которым осуществляется работа.


Пример запуска сборщика мусора:


C# Java Python


using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Prognoz.Platform.Interop.Fore;
using Prognoz.Platform.Interop.Metabase;
namespace TestProject
{
    public partial class Form1 : Prognoz.Platform.Forms.Net.ForeNetFormVS
    {
        public Form1()
        {
            InitializeComponent();
        }

        //...
        private void button1_Click(object sender, EventArgs e)
        {
            IForeServices Svc = (IForeServices)this.Metabase;
            IForeRuntime ForeRun = Svc.GetRuntime();
            ForeRun.CollectFullGarbage();
        }
        //...
    }
}


public static void collectGarbage(IMetabase mb)
{
    IForeServices svc = new IForeServices(mb);
    IForeRuntime foreRun = svc.doGetRuntime();
    foreRun.doCollectFullGarbage();
}


def collectGarbage():
    import foresight.fore as fore
    foreRun = fore.CForeRuntime.Create()
    foreRun.CollectFullGarbage()


См. также:


[Использование
 ресурсов платформы «Форсайт. Аналитическая платформа»
 в сторонних приложениях](../KnowledgeBase_KB000029.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
