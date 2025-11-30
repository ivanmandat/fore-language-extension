# Взаимодействие с Apache Kafka

Взаимодействие с Apache Kafka
-


# Взаимодействие с Apache Kafka


Apache Kafka - это распределённый масштабируемый брокер сообщений. В
 «Форсайт. Аналитическая платформа»
 взаимодействие с Kafka может быть организовано за счёт использования [Python-модулей](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm)
 и написания процедур на языке Python. В дальнейшем данные процедуры также
 могут быть вызваны и из языка Fore.


Рассмотрим пример развёртывания сервера Kafka и работы с ним. Если уже
 имеется работающий сервер Kafka, то шаги 2-4 можно пропустить. Выполните
 следующие шаги:


	- Проверьте наличие установленных языков Java и Python. Если какой-либо
	 язык отсутствует, следуйте инструкциям представленным в статье «[Подключение
	 дополнительных модулей к «Форсайт. Аналитическая платформа»](UiNav.chm::/02_Navigator/CommonSettings/Integration.htm)».


	- Скачайте с сайта [https://downloads.apache.org/kafka/](https://downloads.apache.org/kafka/)
	 tgz-архив с Kafka. Распакуйте, перейдите в папку в папку \bin, если
	 работа осуществляется в ОС Linux или \bin\windows\, если работа осуществляется
	 в ОС Windows.


	- Запустите Zookeeper:


		- в ОС Linux:


./zookeeper-server-start.sh
 ../config/zookeeper.properties


		- в ОС Windows:


zookeeper-server-start.bat
 ../../config/zookeeper.properties


	- Запустите Kafka:


		- в ОС Linux:


./kafka-server-start.sh
 ../config/server.properties


		- в ОС Windows:


kafka-server-start.bat
 ../../config/server.properties


	- Создайте тематический раздел, в который в дальнейшем будут поступать
	 сообщения. Адрес и порт (в примере используется адрес - localhost
	 и порт - 9092) могут отличаться от указанных:


		- в ОС Linux:


./kafka-topics.sh --create
 --topic mytopic --bootstrap-server localhost:9092


		- в ОС Windows:


kafka-topics.bat --create
 --topic mytopic --bootstrap-server localhost:9092


	- Скачайте и распакуйте архив PyKafka, доступный по адресу [https://github.com/Parsely/pykafka](https://github.com/Parsely/pykafka).


	- Установите PyKafka с помощью команды:


pip install pykafka


После этого можно перейти к созданию и наполнению объектов в репозитории.
 Создайте [Python-модуль](UiDevEnv.chm::/01_Development_Environment/02_Work_in_Development_Environment/DevEnv_Object/python_module.htm),
 добавьте в него следующий код:


	from pykafka import KafkaClient

	from pykafka.common import OffsetType


	def sendKafkaMessage(topic, message):

	     client = KafkaClient("localhost:9092")

	    topic = client.topics[topic]

	    with topic.get_sync_producer() as producer:

	         producer.produce(str.encode(message, 'utf-8'))


	def readKafkaMessages(topic):

	    client = KafkaClient("localhost:9092")

	    topic = client.topics[topic]

	     consumer = topic.get_simple_consumer(auto_offset_reset = OffsetType.LATEST, reset_offset_on_start = True)

	     LAST_N_MESSAGES = 6

	     offsets = [(p, op.next_offset - LAST_N_MESSAGES) for p, op in consumer._partitions.items()]

	    consumer.reset_offsets(offsets)

	    i = 0

	     for message in consumer:

	         print(str(message.offset) + ' : ' + message.value.decode('utf-8'))

	         i += 1

	         if i == 5: break


	# Отправка сообщений в Kafka

	for i in range(10):

	    sendKafkaMessage('mytopic', 'Тестовое сообщение: ' + str(i))

	# Чтений сообщений из Kafka

	readKafkaMessages('mytopic')


Процедура sendKafkaMessage позволяет отправлять сообщения в очередь
 указанного тематического раздела. В примере используется адрес - localhost
 и порт - 9092, в реальных условиях они могут отличаться. Процедура readKafkaMessages
 осуществляет переход в конец очереди, затем считывает и выводит в консоль
 среды разработки последние пять сообщений из указанного тематического
 раздела. Если всё выполнено верно, то при выполнении указанного примера
 в очередь сообщений будет отправлено десять сообщений. После этого будут
 получены и выведены в консоль среды разработки последние пять сообщений.


Для вызова Python-процедур в коде на Fore используйте ресурсы сборки
 [Python](KePython.chm::/KePython_Title.htm).
 Ниже приведён код на Fore, в котором различными способами осуществляется
 отправка сообщения в очередь Kafka и получение сообщений из очереди путём
 выполнения приведённых выше Python-методов. Предполагается, что Python-методы
 реализованы в Python-модуле с идентификатором MOD_PY_KAFKA.


	Sub TestSendMessage;

	Begin

	    Python.InvokeModule("MOD_PY_KAFKA", "sendKafkaMessage", "mytopic", "Сообщение, отправленное в Kafka из Fore");

	End Sub TestSendMessage;


	Function TestReadMessage: Variant;

	Var

	    pUtils: IPythonUtils;

	    Result: Variant;

	Begin

	    pUtils := New PythonUtils.Create;

	    Result := pUtils.InvokeModule("MOD_PY_KAFKA", "readKafkaMessages", "mytopic");

	    Return Result;

	End Function TestReadMessage;


См. также:


[База знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
