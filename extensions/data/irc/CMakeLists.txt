SET(sourceFiles
    ircengine.cpp
    ircengineinterface.cpp
    )

SET(headerFiles
    ircengine.h
    ircengineinterface.h
    )

SET(QTMOC_SRCS
    ircengine.h
    ircengineinterface.h
    )

QT4_WRAP_CPP(QT_MOC_SRCS ${QTMOC_SRCS})

SET(sourceFiles
    ${sourceFiles}
    ${headerFiles}
    )

SET(libs
    ${QT_QTGUI_LIBRARY}
    ${OPENGL_LIBRARIES}
    ${QT_QTCORE_LIBRARY}
    ${QT_QTNETWORK_LIBRARY}
    ${QT_QTOPENGL_LIBRARY}
    )

ADD_LIBRARY(ircengine SHARED ${sourceFiles} ${QT_MOC_SRCS})

TARGET_LINK_LIBRARIES(ircengine
    qtviz
    ${libs}
    )

INSTALL(TARGETS ircengine DESTINATION ${CMAKE_INSTALL_LIBDIR}/plexyext)
INSTALL(FILES irc.desktop DESTINATION share/plexy/ext/groups)
